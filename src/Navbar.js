import React from 'react';
import './App.css';

function Navbar(props) {
    const nav = props.list.map((listItem) => <li><a href={listItem}>{listItem}</a></li>)
    return  (
      <div className="Navbar">
        <header>
          <ul>
            {nav}
          </ul>
        </header>
      </div>
      )
  }


export default Navbar;