import React, { Component } from 'react';

export default class SlideVideo extends Component {
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
    const urlYoutube = 'https://www.youtube.com/embed/';
    const videoId = 'sNA2bvPiDSI';
    const autoPlay = '?autoplay=1';
    const src = urlYoutube + videoId;
    return (
      // <img src={this.props.image} />
      <iframe
        className={this.props.scrolled ? 'meinSlideFixed' : 'meinSlide'}
        src={src}
        frameBorder='0'
        allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
        allowFullscreen
      ></iframe>
    );
  }
}
