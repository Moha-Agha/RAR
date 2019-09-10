import React, { Component } from 'react';
// icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
// if no result yet
import NoVideoYet from './components/noVideoYet';
// suggestions and search
import {
  GitSuggestions,
  RenderSuggestionsList,
  RemoveSuggestionsList
} from './components/suggestions';
import { GitSearchResult } from './components/searchResult';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputSearch: '',
      error: '',
      question: ''
    };
    this.suggestionHandler = this.suggestionHandler.bind(this);
  }

  // more than 3 chars -> get the suggestions
  inputHandler = event => {
    let value = event.target.value;
    this.setState({
      inputSearch: value
    });
    if (value.length > 2) {
      this.setState({
        error: null
      });
      GitSuggestions(value);
    }
  };

  // if suggestions result selected
  suggestionHandler(Value) {
    let val = Value.target.innerHTML;
    this.setState({
      question: val,
      inputSearch: val
    });
    RemoveSuggestionsList(true);
  }

  // on searching button click -> start searching
  buttonSearchingHandler = () => {
    let inputSearch = this.state.inputSearch;
    if (inputSearch.length > 2) {
      this.setState({
        question: inputSearch
      });
      RemoveSuggestionsList(true);
    } else {
      // less than 3 charset
      this.setState({
        error: 'you need to writ more !'
      });
    }
  };

  render() {
    const { inputSearch, question, error } = this.state;

    return (
      <div className='App'>
        <header className='container-fluid headerBackground'>
          <div className='container'>
            <div className='row'>
              <div className='offset-1 col-lg-10 text-center'>
                <h1 className='pageTitle text-uppercase mt-7'>
                  youtube suggestions
                </h1>
                <h3 className='pageSubTitle '>
                  Youtube API, React and Bootstrap
                </h3>
                <div className='input-group mt-5'>
                  <input
                    className='form-control searchingInput'
                    type='text'
                    value={inputSearch}
                    onChange={this.inputHandler}
                    placeholder='What do you want to see today?'
                    aria-label='Search'
                  />
                  <div className='input-group-append '>
                    <button
                      className='input-group-text searchingButton '
                      onClick={this.buttonSearchingHandler}
                    >
                      <FontAwesomeIcon
                        className='searchingIcon'
                        icon={faSearch}
                      />
                    </button>
                  </div>
                </div>
                {inputSearch ? (
                  <RenderSuggestionsList
                    suggestionHandler={this.suggestionHandler}
                  />
                ) : null}

                <span className='error'>{error ? error : null}</span>
              </div>
            </div>
          </div>
        </header>
        {!question ? <NoVideoYet /> : <GitSearchResult question={question} />}
      </div>
    );
  }
}
export default App;
