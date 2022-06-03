import React from 'react'

import Upload from './Upload'

class Home extends React.Component {
  //defining the state variable

  render() {
    return (
      <React.Fragment>
        <div>
          <div>
            <div className="content">
              <h1>Handwriting Translation for Dyslexic People</h1>
              <p className="par">
                A one stop destination for recognising and translating
                handwriting of people who suffer from dyslexia.
              </p>

              <Upload />
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default Home
