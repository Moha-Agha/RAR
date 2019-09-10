import React from 'react';

export default class coverflowItem extends React.Component {
  render() {
    const { posts } = this.props;
    const url = 'https://www.youtube.com/watch?v=' + posts.id.videoId,
      imgUrl = posts.snippet.thumbnails.default.url,
      title = posts.snippet.title;
    let classActiv;
    if (this.props.id === 0) {
      classActiv = 'carousel-item active';
    } else {
      classActiv = 'carousel-item';
    }
    return (
      <div className={classActiv}>
        <a className='thumbnail pull-left' target='_block' href={url}>
          <img className='d-block w-100' alt={title} src={imgUrl} />
        </a>
      </div>
    );
  }
}
