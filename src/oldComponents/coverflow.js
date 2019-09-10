import React from 'react';
import Card from './Card';

export default class coverflowSlider extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      scrolled: false,
      userSelectedVideo: '',
      userSelectedVideoIndex: 0,
      posts: this.props.posts,
      videoTitle: this.props.title
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
    this.selectedVideo(this.state.posts, this.state.videoTitle);
  }

  selectedVideo = (items, title) => {
    items.map((item, index) => {
      if (item.snippet.title == title) {
        this.setState({
          userSelectedVideo: item.id.videoId,
          userSelectedVideoIndex: index
        });
      }
    });
  };

  nextProperty = () => {
    const newIndex = this.state.userSelectedVideoIndex + 1;
    this.setState({
      userSelectedVideoIndex: newIndex
    });
    console.log('nextProperty => ' + newIndex);
  };

  prevProperty = () => {
    const newIndex = this.state.userSelectedVideoIndex - 1;
    this.setState({
      userSelectedVideoIndex: newIndex
    });
    console.log('prevProperty => ' + newIndex);
  };

  render() {
    const { posts, videoTitle } = this.state;

    return (
      <div className='App'>
        <button
          onClick={() => this.nextProperty()}
          disabled={
            this.state.userSelectedVideoIndex === this.state.posts.length - 1
          }
        >
          Next
        </button>
        <button
          onClick={() => this.prevProperty()}
          disabled={this.state.userSelectedVideoIndex === 0}
        >
          Prev
        </button>
        <div className='page'>
          <div className='col'>
            <div
              className={`cards-slider active-slide-${this.state.userSelectedVideoIndex}`}
            >
              <div
                className='cards-slider-wrapper'
                style={{
                  transform: `translateX(-${this.state.userSelectedVideoIndex *
                    (100 / posts.length)}%)`
                }}
              >
                {posts.map((post, key) => (
                  <Card
                    key={key}
                    index={key}
                    post={post}
                    videoTitle={videoTitle}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
