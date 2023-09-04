import React from 'react';
import "./SideMenu.css"

function SideMenu({ onSortChange }) {
  return (
    <div className='side-menu'>
      <h3>Sort by:</h3>
      <select onChange={onSortChange}>
        <option value='name'>Name</option>
        <option value='price'>Price</option>
      </select>
    </div>
  );
}

export default SideMenu;
