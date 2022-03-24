import React from 'react';
import EditModal from './EditModal.jsx';

class Word extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    }

    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  };

  handleDelete(e, id) {
    this.props.deleteWord(id);
  };

  showModal() {
    this.setState({showModal: true});
  };

  hideModal() {
    this.setState({showModal: false});
  }

  render() {
    return (
      <div>
        {this.props.word.word} - {this.props.word.definition}
        <EditModal
          showModal={this.state.showModal}
          hideModal={this.hideModal}
          editWord={this.props.editWord}
          initialWord={this.props.word.word}
          initialDefinition={this.props.word.definition}
          wordId={this.props.word._id}
        />
        <button onClick={this.showModal}>
          Edit
        </button>
        <button onClick={(e) => this.handleDelete(e, this.props.word._id)}>
          Delete
        </button>
      </div>
    )
  };
}

export default Word;