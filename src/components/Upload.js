import React from 'react'
import axios from 'axios'
import Button from '@mui/material/Button'
import ImageSearchIcon from '@mui/icons-material/ImageSearch'
import { styled } from '@mui/material/styles'
import PhotoCamera from '@mui/icons-material/PhotoCamera'

const Input = styled('input')({
  display: 'none'
})

class Upload extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      file: null,
      fileName: ''
    }
  }

  saveFile = (e) => {
    this.setState({
      file: e.target.files[0],
      fileName: e.target.files[0].name
    })
  }

  uploadFile = async (e) => {
    const formData = new FormData()
    formData.append('file', this.state.file)
    formData.append('fileName', this.state.fileName)

    console.log('file uploaded')

    try {
      const res = await axios.post(
        'http://localhost:5000/upload/single',
        formData
      )
      console.log(res)
    } catch (ex) {
      console.log(ex)
    }
  }

  render() {
    return (
      <div>
        <label htmlFor="contained-button-file">
          <Input
            accept="image/*"
            id="contained-button-file"
            multiple
            type="file"
            onChange={this.saveFile}
          />
          <Button
            variant="contained"
            component="span"
            style={{ margin: '20px 20px' }}
            startIcon={<PhotoCamera />}
          >
            Upload
          </Button>
        </label>

        <Button
          variant="outlined"
          endIcon={<ImageSearchIcon />}
          onClick={this.uploadFile}
          style={{ color: '#311f18f9', borderColor: '#311f18f9' }}
        >
          Recognise
        </Button>
      </div>
    )
  }
}

export default Upload
