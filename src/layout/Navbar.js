import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='nav-container'>
        <h1>HackerNews Clone</h1>
        <ul className='links-container'>
          <li>
            <Link to='/' style={linkStyle}>
              Home{' '}
            </Link>
          </li>
          <li>
            <Link to='/ask' style={linkStyle}>
              Ask
            </Link>
          </li>
          <li>
            <Link to='/show' style={linkStyle}>
              Show
            </Link>
          </li>
          <li>
            <Link to='/job' style={linkStyle}>
              Job
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

const linkStyle = {
  textDecoration: 'none',
  color: 'beige',
};
