import React, { Component } from 'react';
// icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

export default class Slider extends Component {
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

  render() {
    return (
      <div
        className={
          this.state.scrolled ? 'sliderWrapperFixed ' : 'sliderWrapper mt-6'
        }
      >
        <div
          className={
            this.state.scrolled
              ? 'sliderContenerFixed  container'
              : 'sliderContener container'
          }
        >
          <div className='nextArrow arrow'>
            <FontAwesomeIcon className='arrowRight' icon={faChevronRight} />
          </div>

          <div className='offset-1 col-lg-10 d-none d-lg-block d-md-block'>
            {!this.state.loading ? (
              <div className={this.state.scrolled ? 'd-none' : 'rightSlide'}>
                <img src='./images/slid2.png' alt='img' />
              </div>
            ) : null}

            <div className='iframeVideo'>
              <iframe
                className={this.state.scrolled ? 'meinSlideFixed' : 'meinSlide'}
                src={
                  'https://www.youtube.com/embed/' +
                  this.state.videoIds[0] +
                  '?autoplay=1'
                }
                frameBorder='0'
                allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
                allowFullscreen
              ></iframe>
            </div>

            {!this.state.loading ? (
              <div className={this.state.scrolled ? 'd-none' : 'leftSlide'}>
                <img src='./images/slid3.png' alt='img' />
              </div>
            ) : null}
          </div>

          <div className='backArrow arrow'>
            <FontAwesomeIcon className='arrowLeft' icon={faChevronLeft} />
          </div>
        </div>
      </div>
    );
  }
}
