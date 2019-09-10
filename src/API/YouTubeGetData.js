export function getSuggestionAPI(value) {
  const val = value;
  const key = 'AIzaSyBahF7YmvpZiMBziQXy21Uhe44URp2yPHE';
  const maxResults = 5;
  const url =
    'https://www.googleapis.com/youtube/v3/search?key=' +
    key +
    '&order=title&safeSearch=strict&type=video&q=' +
    val +
    '&part=snippet&maxResults=' +
    maxResults;

  return new Promise((resolve, reject) => {
    fetch(url, {
      method: 'get',
      headers: {
        Accept: 'application/json'
      }
    })
      .then(res => {
        return res.json();
      })
      .then(data => {
        const suggestion = data.items.map(obj => obj);
        resolve(suggestion).parse();
      })
      .catch(err => err);
  });
}

export function gitSearchResultAPI(value) {
  const val = value;
  const key = 'AIzaSyBahF7YmvpZiMBziQXy21Uhe44URp2yPHE';
  const maxResults = 9;
  const url =
    'https://www.googleapis.com/youtube/v3/search?key=' +
    key +
    '&order=title&safeSearch=strict&type=video&q=' +
    val +
    '&part=snippet&maxResults=' +
    maxResults;

  return new Promise((resolve, reject) => {
    fetch(url, {
      method: 'get',
      headers: {
        Accept: 'application/json'
      }
    })
      .then(res => {
        return res.json();
      })
      .then(data => {
        const searchResult = data.items.map(obj => obj);
        resolve(searchResult);
      })
      .catch(err => err);
  });
}

export default {
  getSuggestionAPI,
  gitSearchResultAPI
};
