import React, { Component } from 'react';
import SlideVideo from './SlideVideo';
import SlideImgLeft from './SlideImgLeft';
import SlideImgRight from './SlideImgRight';
import Slide from './Slide';
import LeftArrow from './leftArrow';
import RightArrow from './rightArrow';

export default class Slider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      scrolled: false,
      currentIndex: 0
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', () => {
      const isTop = window.scrollY < 470;

      if (isTop !== true) {
        this.setState({ scrolled: true });
      } else {
        this.setState({ scrolled: false });
      }
    });
  }

  goToPrevSlide = () => {};

  goToNextSlide = () => {};

  render() {
    return (
      <div
        className={
          this.state.scrolled ? 'sliderWrapperFixed' : 'sliderWrapper mt-6'
        }
      >
        <div
          className={
            this.state.scrolled
              ? 'sliderContenerFixed  container'
              : 'sliderContener container'
          }
        >
          <RightArrow goToNextSlide={this.goToNextSlide} />
          <div className='offset-1 col-lg-10'>
            {this.props.searchResults.map((video, i) => {
              return (
                <Slide key={i} video={video} scrolled={this.state.scrolled} />
              );
            })}
          </div>
          <LeftArrow goToPrevSlide={this.goToPrevSlide} />
        </div>
      </div>
    );
  }
}
