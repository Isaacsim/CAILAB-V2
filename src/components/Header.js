import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const Header = props => (
  <header id="header" className="alt">
    <Link to="/" className="logo">
      <strong>CAILAB</strong> <span></span>
    </Link>
    <nav>
      <ul className="actions small menu-btn">
        <li>
          <Link to="/landing" className="">
            People
          </Link>
        </li>
        <li>
          <Link to="/generic" className="">
            Research
          </Link>
        </li>
        <li>
          <Link to="/publications" className="">
            Publications
          </Link>
        </li>
        <li>
          <Link to="#contact" className="">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  onToggleMenu: PropTypes.func,
}

export default Header
