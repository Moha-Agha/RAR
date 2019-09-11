import React, { Component } from 'react';
// icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import Coverflow from 'reactjs-coverflow';

export default class CoverflowSlider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      scrolled: false,
      videoIds: []
    };
  }

  componentDidMount() {
    let videoIds = [];
    this.props.searchResults.map(searchResult => {
      videoIds.push(searchResult.id.videoId);
      this.setState({ videoIds: videoIds });
    });

    window.addEventListener('scroll', () => {
      const isTop = window.scrollY < 470;

      if (isTop !== true) {
        this.setState({ scrolled: true });
      } else {
        this.setState({ scrolled: false });
      }
    });
    setTimeout(() => {
      this.setState({ loading: false });
    }, 500);
  }

  prev = e => {
    e.preventDefault();
    this.refs.coverflow.previous();
  };
  next = e => {
    e.preventDefault();
    this.refs.coverflow.next();
  };

  render() {
    return (
      <React.Fragment>
        <Coverflow
          ref='coverflow'
          style={{ width: '100vw', height: '350px' }}
          margin={(this.state && this.state.margin + 'px') || undefined}
          startPosition={4}
          enableScroll={true}
          rotate={30}
          translateX={200}
          animationSpeed={0.8}
        >
          {this.props.searchResults.map((searchResult, i) => {
            return (
              <img
                className='coverflowImg'
                src={searchResult.snippet.thumbnails.high.url}
                alt='img'
              />
            );
          })}
        </Coverflow>
        <button onClick={this.prev} type='button'>
          Prev
        </button>
        <button onClick={this.next} type='button'>
          Next
        </button>
      </React.Fragment>
    );
  }
}
