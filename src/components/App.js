import React, { Component } from 'react'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      email: '',
      emailCheck: 'Please enter an email',
      phone: '',
      phoneCheck: 'Please enter a phone number'
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleChangePhone = this.handleChangePhone.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange (event) {
    this.setState({email: event.target.value})
  }
  handleChangePhone (event) {
    this.setState({phone: event.target.value})
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
  phoneChecker (x) {
    let foo = 'nothing'
    let arr = x.split('')
    if (
      (arr[0] || arr[3] === 0) ||
      (arr.length !== 10) ||
      ((arr[0] - arr[1] === 0) && (arr[1] - arr[2] === 0)) ||
      (x = '1234567890')

    ) {
      foo = 'ayyyyyy'
    } else {
      foo = 'naahhh'
    }
    console.log(x)
    console.log(foo)
  }

  handleSubmit (event) {
    console.log('Information has been submitted: ' + this.state.email + this.state.phone)
    this.emailChecker(this.state.email)
    this.emailChecker(this.state.phone)
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
        <p>{this.state.emailCheck}</p>
        <input type='text'
          value={
              this.state.phone
            }
          onChange={
              this.handleChangePhone
            }
           />
        <p>{this.state.phoneCheck}</p>
        <input type='submit'
          value='Submit'
            />
      </form>
    </div>
  }
}

export default App
