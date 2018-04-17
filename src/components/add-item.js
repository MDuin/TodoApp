import React from 'react';

class AddItem extends React.Component {

  render() {
    return (<div className="input-container">
        <p>Beschrijving:</p>
        <input type="text"
            ref={(input) => { this.descriptionInput = input; }}
            onKeyPress={event => this.handleKeyPress(event)} />
      </div>
    );
  }

  componentDidMount() {
    this.descriptionInput.focus();
  }

  handleKeyPress(event) {
    if (event.key === 'Enter') {
      this.props.addItemToList(event.target.value);
    }
  }
}

export default AddItem;
