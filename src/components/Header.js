import React from 'react'
import applogo from './iconimage.jpeg'

class Header extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="navbar">
          <div className="icon">
            <a className="navbar-brand logo" href="/">
              <img className="logo-image" src={applogo} alt="" />
              <span>Recognito</span>
            </a>
          </div>
          <div className="menu">
            <ul>
              <li>
                <a href="/">HOME</a>
              </li>
              <li>
                <a href="/about">ABOUT</a>
              </li>
              <li>
                <a href="/contact-us">CONTACT</a>
              </li>
            </ul>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default Header
