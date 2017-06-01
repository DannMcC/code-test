import React, { Component } from 'react'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      emailForm: 'form-group',
      email: '',
      emailCheck: '',
      emailAlert: '',
      phoneForm: 'form-group',
      phone: '',
      phoneCheck: '',
      phoneAlert: '',
      doneAlert: ''
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
    let arr = x.split('')
    if ((arr.indexOf('@') >= 1) && (arr.indexOf('.') >= (arr.indexOf('@') + 2))) {
      this.setState({emailForm: 'col-lg-2 form-group has-success'})
      this.setState({emailAlert: ''})
      this.setState({emailCheck: true})
    } else {
      this.setState({emailForm: 'form-group has-error'})
      this.setState({emailAlert:
  <div className='alert alert-dismissible alert-danger'>
    <button type='button' className='close' data-dismiss='alert'>&times;</button>
    <strong>Stop lying to me!</strong> Enter a <i> real </i> email and press submit.
        </div>})
    }
  }
  phoneChecker (x) {
    let arr = x.split('')
    if (
      (arr[0] === '0') ||
      (arr[3] === '0') ||
      (arr.length !== 10) ||
      ((arr[0] - arr[1] === 0) && (arr[1] - arr[2] === 0)) ||
      (x === '1234567890') ||
      (x === '0987654321') ||
      (x === '9876543210') ||
      (x === '0123456789') ||
      (x === '0101010101') ||
      (x === '1010101010') ||
      (isNaN(parseInt(x)))

    ) {
      this.setState({phoneForm: 'form-group has-error'})
      this.setState({phoneAlert:
  <div className='alert alert-dismissible alert-danger'>
    <button type='button' className='close' data-dismiss='alert'>&times;</button>
    <strong>Your are lying!</strong> Real phone numbers only!
        </div>})
    } else {
      this.setState({phoneForm: 'form-group has-success'})
      this.setState({phoneCheck: true})
      this.setState({phoneAlert: ''})
      this.doneCheck()
    }
  }
  doneCheck () {
    if ((this.state.phoneCheck === true) && (this.state.emailCheck === true)) {
      this.setState({doneAlert:
  <div className='alert alert-dismissible alert-success'>
    <button type='button' className='close' data-dismiss='alert'>&times;</button>
    <strong>Well done!</strong> You successfully read <a href='#' className='alert-link'>this important alert message</a>.
        </div>
      })
    }
  }

  handleSubmit (event) {
    console.log('Information has been submitted: ' + this.state.email + this.state.phone)
    this.emailChecker(this.state.email)
    this.phoneChecker(this.state.phone)
    event.preventDefault()
  }
  render () {
    return <div>
      <nav className='navbar navbar-default'>
        <div className='container-fluid'>
          <div className='navbar-header' />
          <button type='button' className='navbar-toggle collapsed' data-toggle='collapse' data-target='#bs-example-navbar-collapse-1' />
          <a className='navbar-brand' href='#'>Senergy Inc.</a>
        </div>
      </nav>
      <div className='col-md-4 col-md-offset-4 text-center mt24'>
        <h3>Hello!</h3>
        <h5> Please submit your email and phone number to us! </h5>
        <h4> Email</h4>
        <div className={this.state.emailForm}>
          <input className='form-control'
            id='focusedInput'
            type='text'
            value={
            this.state.email
          }
            onChange={
            this.handleChange
          } />
        </div>
        <div>{this.state.emailAlert}</div>
        <div className={this.state.phoneForm}>
          <h4> Phone </h4>
          <h6>At his time, we cannot support international users. Please enter a US phone number with an area code, and no spaces or dashes.</h6>
          <input className='form-control'
            id='focusedInput'
            type='text'
            value={
              this.state.phone
            }
            onChange={
              this.handleChangePhone
            } />
        </div>

        <div>{this.state.phoneAlert}</div>
        <form onSubmit={this.handleSubmit}>
          <input type='submit'
            value='Submit'
            className='btn'
            />
          <div>{this.state.doneAlert}</div>
        </form>
      </div>
    </div>
  }
}
export default App
