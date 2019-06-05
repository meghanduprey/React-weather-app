import React from 'react';
import './App.css';

function Footer(props) {
  return (

    <footer>
      {props.name} {props.year}
    </footer>

  );
}

export default Footer;