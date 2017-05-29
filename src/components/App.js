import React, { Component } from 'react'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      email: '',
      emailCheck: 'Please enter an email'
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange (event) {
    this.setState({email: event.target.value})
  }
  emailChecker (x) {
    let foo = 'nothing'
    let arr = x.split('')
    if ((arr.indexOf('@') >= 1) && (arr.indexOf('.') >= (arr.indexOf('@') + 2))) {
      foo = 'ayyyyyy'
    } else {
      foo = 'naahhh'
    }
    console.log(x)
    console.log(foo)
  }

  handleSubmit (event) {
    console.log('A name was submitted: ' + this.state.email)
    this.emailChecker(this.state.email)
    event.preventDefault()
  }
  render () {
    return <div>
      <form onSubmit={this.handleSubmit}>
        Email:
        <input type='text'
          value={
            this.state.email
          }
          onChange={
            this.handleChange
          }
         />
        <input type='submit'
          value='Submit'
          />
      </form>
      <p>{this.state.emailCheck}</p>
    </div>
  }
}

export default App
