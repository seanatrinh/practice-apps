import React from 'react';
import axios from 'axios';

// file imports
import WordList from './components/WordList.jsx';
import Search from './components/Search.jsx';
import Add from './components/Add.jsx';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:3000/api'
});

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      words: []
    }

    this.addToDatabase = this.addToDatabase.bind(this);
    this.deleteWord = this.deleteWord.bind(this);
    this.editWord = this.editWord.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  };

  componentDidMount() {
    axiosInstance.get('/words')
      .then(response => this.setState({words: response.data}))
      .catch(error => console.log(error));
  }

  addToDatabase(wordObj) {
    // something to add later: if word exists, don't send post request
    axiosInstance.post('/words', wordObj)
      .then(response => console.log('POST request server response: ', response.data))
      .then(() => axiosInstance.get('/words')
        .then(response => this.setState({words: response.data}))
        .catch(error => console.log(error)))
      .catch(error => console.log(error));
  }

  deleteWord(id) {
    axiosInstance.delete('/words', {data: {_id: id}})
      .then(response => console.log('DELETE request server response: ', response.data))
      .then(() => axiosInstance.get('/words')
        .then(response => this.setState({words: response.data}))
        .catch(error => console.log(error)))
      .catch(error => console.log(error));
  }

  editWord(requestObj) {
    axiosInstance.put('/words', requestObj)
      .then(response => console.log('PUT request server response: ', response.data))
      .then(() => axiosInstance.get('/words')
        .then(response => this.setState({words: response.data}))
        .catch(error => console.log(error)))
      .catch(error => console.log(error));
  }

  handleSearch(term) {
    let filtered = this.state.words.filter(wordObj => wordObj.word.includes(term));
    this.setState({words: filtered});
  }

  render() {
    return (
      <div>
        <h1>my glossary</h1>
        <Search
          handleSearch={this.handleSearch}
        />
        <Add
          addToDatabase={this.addToDatabase}
        />
        <WordList
          words={this.state.words}
          deleteWord={this.deleteWord}
          editWord={this.editWord}
        />
      </div>
    )
  };
}

export default App;