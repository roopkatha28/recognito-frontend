import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch
} from 'react-router-dom'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import applogo from './iconimage.jpeg'

/*The Error page is not well made yet. Please style it properly before making it live */

class Navbar extends React.Component {
  render() {
    return (
      <>
        <div>
          <Router>
            <div className="navbar">
              <div id="header">
                <div className="icon">
                  <NavLink className="navbar-brand logo" to="/">
                    <img className="logo-image" src={applogo} alt="" />
                    <span>Recognito</span>
                  </NavLink>
                </div>
                <div className="menu">
                  <NavLink className="navlink" to="/">
                    HOME
                  </NavLink>

                  <NavLink className="navlink" to="/about-us">
                    ABOUT
                  </NavLink>

                  <NavLink className="navlink" to="/contact-us">
                    CONTACT
                  </NavLink>
                </div>
              </div>
              <div>
                <Switch>
                  <Route path="/" exact>
                    <Home />
                  </Route>
                  <Route path="/about-us">
                    <About />
                  </Route>

                  <Route path="/contact-us">
                    <Contact />
                  </Route>
                </Switch>
              </div>
            </div>
          </Router>
        </div>
      </>
    )
  }
}

export default Navbar
