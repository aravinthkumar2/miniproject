import React from 'react';
import '../Nav/Nav.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

const Nav = () => {
  return (
    <div className='header'>
    <div className='Nav-container' >
      <h1>Devi</h1>
      <input type='search' placeholder='Search' className='search'/>
      <FontAwesomeIcon icon={faCartShopping} />
      <button className='button'>LogOut</button>
      </div>

    </div>
  );
}

export default Nav;
