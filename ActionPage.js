import React from 'react'
import ActionForm from './ActionForm'
import { connect } from 'react-redux'


 class ActionPage extends React.Component {
  submit = (values) => {
    const { store } = this.props;
    store.dispatch({type: 'INCREMENT',number:parseInt(values.number)});
    //console.log(store.getState());
  }
  render() {
    return (
      <div style={{backgroundColor:'aliceblue'}}>
        <ActionForm onSubmit={this.submit} />
      </div>
    )
  }
}


ActionPage = connect()(ActionPage)

export default ActionPage