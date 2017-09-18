import React from 'react'
import ContactForm from './ContactForm'
import { connect } from 'react-redux'

 class ContactPage extends React.Component {
  submit = (values) => {
    // print the form values to the console
    for (var prop in values) {
      console.log(`${prop} = ${values[prop]}`);
    }
  }
  render() {
    console.log('PROPS',this.props);
    return (
      <ContactForm onSubmit={this.submit} />
    )
  }
}


ContactPage = connect()(ContactPage)

export default ContactPage