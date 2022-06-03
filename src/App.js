import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import './App.css'
import Router from './components/Router'

class App extends React.Component {
  //defining the state variable

  render() {
    return (
      <React.Fragment>
        <div className="main">
          <div className="submain">
            <Router />
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default App
