import React from 'react';
import {Link} from 'react-router-dom'
import './navbar.css'

function Navbar() {
  return (
    <div className="navbar">
      <Link className='link' to="/getpost">post</Link>
      <Link className='link' to="/getcomments">comments</Link>
    </div>
  );
}

export default Navbar;