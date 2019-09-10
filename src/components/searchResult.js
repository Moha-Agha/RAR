import React, { Component } from 'react';
import { gitSearchResultAPI } from '../API/YouTubeGetData';
// import Slider from '../slider/Slider';
import Slider from './Slider';
import TextBlock from './textBlock';

export class GitSearchResult extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      questionCache: '',
      searchResults: []
    };
  }

  componentDidMount() {
    this.setState({
      questionCache: this.props.question
    });
    this.gitSearchResult();
  }

  gitSearchResult = () => {
    gitSearchResultAPI(this.props.question).then(objects => {
      this.setState({
        searchResults: objects,
        loading: false
      });
    });
  };

  regitSearchResult = () => {
    this.setState({
      questionCache: this.props.question
    });
    this.gitSearchResult();
  };

  render() {
    const { searchResults, loading, questionCache } = this.state;
    if (loading) {
      return <p></p>;
    }
    if (questionCache !== this.props.question) {
      this.setState({
        loading: true
      });
      this.regitSearchResult();
    }

    return (
      <React.Fragment>
        <Slider searchResults={searchResults} />
        <TextBlock searchResults={searchResults} />
      </React.Fragment>
    );
  }
}

export default {
  GitSearchResult
};
