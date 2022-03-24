import React from 'react';

class EditModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      word: this.props.initialWord,
      definition: this.props.initialDefinition
    }

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
    // handle edit, this is drilled from App
    this.props.editWord({
      filter: {_id: this.props.wordId},
      update: {word: this.state.word, definition: this.state.definition}
    });
  }


  render() {
    let modalClassName = this.props.showModal ? 'modal display-block' : 'modal display-none';

    return (
      <div className={modalClassName}>
        <section className='modal-main'>
          <form onSubmit={this.handleSubmit}>
            <label>
              <input name='word' type='text' value={this.state.word} onChange={this.handleInputChange} />
              <input name='definition' type='text' value={this.state.definition} onChange={this.handleInputChange} />
            </label>
            <input type='submit' value='Submit Changes'/>
          </form>
            <form onSubmit={this.props.hideModal}>
              <input type='submit' value='Exit' />
            </form>
        </section>

      </div>
    )
  };
}

export default EditModal;