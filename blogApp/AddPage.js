import React from 'react'
import AddForm from './AddForm'
import { connect } from 'react-redux'


 class AddPage extends React.Component {
  submit = (values) => {
    const { store } = this.props;
    console.log(values);
    //store.dispatch({type: 'ADD_BLOG',blog:values});
  }
  render() {
    return (
        <AddForm onSubmit={this.submit} store={this.props.store} />
    )
  }
}


AddPage = connect()(AddPage)

export default AddPage