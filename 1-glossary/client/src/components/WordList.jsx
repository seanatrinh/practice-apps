import React from 'react';
import Word from './Word.jsx';

class WordList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  };

  render() {
    return (
      <div>
        {this.props.words.map((word, i) => <Word
                                              key={word+i}
                                              word={word}
                                              deleteWord={this.props.deleteWord}
                                              editWord={this.props.editWord}
                                            />)}
      </div>
    )
  };
}

export default WordList;