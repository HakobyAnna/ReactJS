import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import './Greeting.css'

class Work extends Component {
  state = {
    value: '',
    toggle: false
  }

  handleChange = (event) => {
    this.setState({
      value: event.target.value
    });
  }

  handleClick = () => {
    this.setState({
      toggle: true
    })
  }

  render() {
    return (
      <div>
        <div className='inputForm'>
          <TextField
            id="outlined-primary"
            label="Name"
            variant="outlined"
            value={this.state.value}
            onChange={this.handleChange}
            color="secondary"
          />
          <Button
            variant="contained"
            color="secondary"
            onClick={this.handleClick}>
            Click
          </Button> 
        </div>
        {this.state.toggle && <p>Hello {this.state.value}</p>}
        {this.state.toggle = false}
      </div>
    )
  }
}

export default Work