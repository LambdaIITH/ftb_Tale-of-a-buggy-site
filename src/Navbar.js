import React from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css";
const Navbar = () => {

  let navItems1 = [
    { path: '/', 
      name: 'Home' 
    },

    { path: '/about',
     name: 'About' 
    },

    { path: '/secret',
     name: 'Secret'
    }
  ];


  const navItems2 = null;

  return (
    <nav className="navbar">
      <div className="container">
        <Link to="/" className="logo">Fix the Bug Site</Link>
        <ul className="nav-links">

          {navItems2 && navItems2.map((item, index) => (
            <li key={index}>
              <Link to={item.path}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
