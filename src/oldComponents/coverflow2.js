import React from 'react';

export default class coverflowSlider extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      scrolled: false,
      userSelectedVideo: ''
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', () => {
      const isTop = window.scrollY < 350;
      if (isTop !== true) {
        this.setState({ scrolled: true });
      } else {
        this.setState({ scrolled: false });
      }
    });
    this.selectedVideo(this.props.posts, this.props.title);
  }

  selectedVideo = (items, title) => {
    items.map(item => {
      if (item.snippet.title == title) {
        this.setState({
          userSelectedVideo: item.id.videoId
        });
      }
    });
  };

  render() {
    const youTubeUrl = 'https://www.youtube.com/embed/';
    return (
      <div className='container'>
        <div className='row mt-5'>
          <div className=' offset-3 col-lg-6 '>
            <iframe
              className={
                this.state.scrolled
                  ? ' mainSleider videoFix '
                  : ' d-block w-100 mainSleider  '
              }
              src={youTubeUrl + this.state.userSelectedVideo}
              // src={youTubeUrl + this.props.id.videoId}
              title='videoSleider'
              frameBorder='0'
              allow='autoplay; encrypted-media'
            ></iframe>
          </div>
        </div>
      </div>
    );
  }
}
