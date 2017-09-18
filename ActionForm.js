import React from 'react'
import { Field, reduxForm, FieldProps } from 'redux-form'
import MyCustomInput from './MyCustomInput'
let ActionForm = props => {
	const { handleSubmit } = props;

	return (
		<form onSubmit={ handleSubmit }>
			<h1 style={{alignText:'center'}}> Hellooo Enter a number to increment with.</h1>
			<div key={Math.random()}>
				<label htmlFor="firstName">Number</label>
				<Field name="number" component="input"  type="number"/>
			</div>
				<button type="submit">Increment</button>


				<Field name="myField" component={MyCustomInput}/>

		</form>
	)
}

ActionForm = reduxForm({
	// a unique name for the form
	form: 'IncrementForm'
})(ActionForm)


export default ActionForm;