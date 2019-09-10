import React, { Component } from 'react';

export default class Slide extends Component {
  constructor(props) {
    super(props);

    this.state = {
      scrolled: false,
      images: [],
      currentIndex: 0,
      translateValue: 0
    };
  }
  render() {
    return (
      <div className={this.props.scrolled ? 'd-none' : 'rightSlide'}>
        <img src={this.props.video.snippet.thumbnails.high.url} alt='img' />
      </div>
      /* <SlideVideo
          key={i}
          video={video}
          scrolled={this.state.scrolled}
          />
          <SlideImgLeft
          key={i}
          video={video}
          scrolled={this.state.scrolled}
          />
          <SlideImgRight
          key={i}
          video={video}
          scrolled={this.state.scrolled}
          /> */
    );
  }
}
