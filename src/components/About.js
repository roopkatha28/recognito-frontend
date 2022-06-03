import React from 'react'
import './style2.css'
import shrestha from './shrestha.jpeg'
import roop from './roop.jpeg'
import soha from './soha.jpeg'
import soumyadeep from './soumyadeep.jpeg'

class About extends React.Component {
  render() {
    return (
      <>
        <div>
          <h1> About</h1>

          <p className="description">
            Recognising and translationg handwriting of dyslexic people without
            any hassle. If you are unable to read illegible or reversed letters,
            this is for you!
          </p>

          <hr />
          <h1>Founders</h1>
          <div className="founders">
            <img
              className="founder-image"
              src={shrestha}
              alt={'Image not found'}
            />
            <h3>Shrestha Banerjee</h3>
            <p>
              BTech in Computer Science and Engineering from Techno Main Salt
              Lake(2018-2022)
            </p>
            <img className="founder-image" src={soha} alt={'Image not found'} />
            <h3>Sohali Biswas</h3>
            <p>
              BTech in Computer Science and Engineering from Techno Main Salt
              Lake(2018-2022)
            </p>
            <img className="founder-image" src={roop} alt={'Image not found'} />
            <h3>Roopkatha Chatterjee</h3>
            <p>
              BTech in Computer Science and Engineering from Techno Main Salt
              Lake(2018-2022)
            </p>
            <img
              className="founder-image"
              src={soumyadeep}
              alt={'Image not found'}
            />
            <h3>Soumyadeep Sarkar</h3>
            <p>
              BTech in Computer Science and Engineering from Techno Main Salt
              Lake(2018-2022)
            </p>
          </div>

          <br />
          <p className="center">
            <a href="#Order" style={{ textDecoration: 'none', color: 'white' }}>
              Something
            </a>
          </p>
        </div>
      </>
    )
  }
}

export default About
