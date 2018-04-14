import React from 'react';

class AddItemButton extends React.Component {

  render() {
    return (<button className="add-item-button" onClick={this.props.showAddItem}>
      Add Item
    </button>);
  }
}

export default AddItemButton;
