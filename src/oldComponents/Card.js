import React, { Component } from 'react';

export default class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: this.props.post,
      index: this.props.index,
      videoTitle: this.props.videoTitle
    };
  }
  render() {
    const { post, index, videoTitle } = this.state;
    const youTubeUrl = 'https://www.youtube.com/watch?v=';

    if (post.snippet.title == videoTitle) {
      return (
        <div className=''>
          <iframe
            className=' d-block w-100 mainSleider'
            src={youTubeUrl + post.id.videoId}
            title={videoTitle}
            frameBorder='0'
          ></iframe>
        </div>
      );
    } else {
      return (
        <div id={`card-${index}`} className='card'>
          <img src={post.snippet.thumbnails.high.url} alt='' />
          <div className='details'>
            <span className='index'>{index + 1}</span>
            <p className='location'></p>
            <ul className='features'></ul>
          </div>
        </div>
      );
    }
  }
}
