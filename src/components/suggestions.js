import React, { Component } from 'react';
import { getSuggestionAPI } from '../API/YouTubeGetData';

var suggestions = [];

export function GitSuggestions(value) {
  let data = [];
  getSuggestionAPI(value).then(objects => {
    objects.forEach(object => {
      data.push(object.snippet.title);
    });
    // let regex = new RegExp(`^${input}`, 'i');
    // dataResout = data.sort().filter(v => regex.test(v));
    if (value < 1) {
      suggestions = [];
    }
    suggestions = data;
  });
}

export class RenderSuggestionsList extends Component {
  render() {
    if (suggestions.length === 0) {
      return null;
    } else {
      return (
        <div className='suggestionsList'>
          <ul>
            {suggestions.map((item, i) => (
              <span key={i}>
                <li onClick={this.props.suggestionHandler}>{item}</li>
              </span>
            ))}
          </ul>
        </div>
      );
    }
  }
}

export function RemoveSuggestionsList(value) {
  if (value) {
    suggestions = [];
  }
}

export default {
  GitSuggestions,
  RenderSuggestionsList,
  RemoveSuggestionsList
};
