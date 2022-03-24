import React from 'react';

class Add extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      word: 'word',
      definition: 'definition'
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  };

  handleInputChange(event) {
    const target = event.target;
    const name = target.name;

    this.setState({[name]: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    // handle Add in app
    this.props.addToDatabase({
      word: this.state.word,
      definition: this.state.definition
    });
    // reset state after adding
    this.setState({
      word: 'word',
      definition: 'definition'
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          <input name='word' type='text' value={this.state.word} onChange={this.handleInputChange} />
          <input name='definition' type='text' value={this.state.definition} onChange={this.handleInputChange} />
        </label>
        <input type='submit' value='Add'/>
      </form>
    )
  };
}

export default Add;