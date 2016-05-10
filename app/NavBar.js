import React from 'react';

class NavBar extends React.Component {
	render() {
		return (
      <nav>
        <div className="nav-wrapper">
          <a href="#" className="brand-logo">Calculator</a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><a href="https://github.com/vikramcse/react-calculator">Vikram Jadhav</a></li>
          </ul>
        </div>
      </nav>
		);
	}
}

export default NavBar;
