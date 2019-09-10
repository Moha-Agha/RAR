import React, { Component } from 'react';
import Slide from './Slide';
import LeftArrow from './leftArrow';
import RightArrow from './rightArrow';

export default class Slider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      images: [],
      currentIndex: 0,
      translateValue: 0
    };
  }

  componentDidMount() {
    let images = [];
    this.props.searchResults.forEach(searchResult => {
      images.push(searchResult.snippet.thumbnails.high.url);
      this.setState({
        images: images
      });
    });
  }

  goToPrevSlide = () => {
    if (this.state.currentIndex === 0) return;

    this.setState(prevState => ({
      currentIndex: prevState.currentIndex - 1,
      translateValue: prevState.translateValue + this.slideWidth()
    }));
  };

  goToNextSlide = () => {
    if (this.state.currentIndex === this.state.images.length - 1) {
      return this.setState({
        currentIndex: 0,
        translateValue: 0
      });
    }

    this.setState(prevState => ({
      currentIndex: prevState.currentIndex + 1,
      translateValue: prevState.translateValue + -this.slideWidth()
    }));
  };

  slideWidth = () => {
    return document.querySelector('.slide').clientWidth;
  };

  render() {
    return (
      <div className='slider'>
        <div
          className='slider-wrapper'
          style={{
            transform: `translateX(${this.state.translateValue}px)`,
            transition: 'transform ease-out 0.45s'
          }}
        >
          {this.state.images.map((image, i) => (
            <Slide key={i} image={image} />
          ))}
        </div>

        <LeftArrow goToPrevSlide={this.goToPrevSlide} />

        <RightArrow goToNextSlide={this.goToNextSlide} />
      </div>
    );
  }
}
