import React from 'react';

const AddItemButton = props => {
  return (<button className="add-item-button" onClick={props.showAddItem}>Nieuw item</button>);
};

export default AddItemButton;
