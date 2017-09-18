import React from 'react'
import { Field, reduxForm, FieldProps } from 'redux-form';
import { FormControl, FormGroup, ControlLabel, HelpBlock, FieldGroup } from 'react-bootstrap';
import style from './style'
class AddForm extends React.Component {

	constructor(props) {
		super(props);
		this.state = {

		}
	this.bindTextRender= (placeholder) => this.renderTextField.bind(this,placeholder);
	this.bindrenderSelectField = (datasource,type) => this.renderSelectField.bind(this,datasource,type);
	}


	renderTextField = (placeholderText,{
		input,
		...custom
	  }) =>{
		console.log(input);
		console.log(custom.meta);
	  return(<FormControl
					type="text"
					{...input}
					{...custom}
					placeholder={placeholderText}
				/>		
	  )}
	

    renderTextAreaField = ({
		input,
		label,
		meta: { touched, error },
		...custom
	  }) =>  <FormControl componentClass="textarea" 
	  placeholder="Content" {...input}
			{...custom}/>

	renderSelectField = (datasource,type,{
		input,
		label,
		meta: { touched, error },
		children,
		...custom
	  }) => {
		return (
			<FormControl componentClass="select" placeholder="select"
				{...input}
				{...custom}>
				<option value="select">select {type} of Blog </option>
				{datasource.map((item) => {
					return (<option key={item.id} value={item.id}>{item.name}</option>)
				})}
			</FormControl>

		)
	}

	renderFile = ({
		input,
		label,
		meta: { touched, error },
		children,
		...custom
	  }) => <FormControl
			type="file"
			{...input}
			{...custom}
			placeholder="Enter text"
		/>

	renderusersSelectField = ({
		input,
		label,
		meta: { touched, error },
		children,
		...custom
	  }) => {

		console.log(this.props.store.getState().BlogReducer.users);
		return (
			<FormControl componentClass="select" placeholder="select"
				{...input}
				{...custom}>
				<option value="select">select User of Blog</option>
				{this.props.store.getState().BlogReducer.users.map((user) => {
					return (<option key={user.id} value={user.id}>{user.name}</option>)
				})}
			</FormControl>

		)
	}


	render() {

		const { handleSubmit } = this.props;
		return (
			<form onSubmit={handleSubmit}>

				<Field name="title" component={this.bindTextRender('Title')} type="text" />
				<br />
				<Field name="description" component={this.bindTextRender('Description')} type="text" />
				<br />
				<Field name="Category" component={this.bindrenderSelectField(this.props.store.getState().BlogReducer.categories,
				'Category')} />
				<br />
				<Field name="User" component={this.bindrenderSelectField(this.props.store.getState().BlogReducer.users,
				'User')} />
				<br />
				<Field name="BlogContent" component={this.renderTextAreaField} />
				<br />
				<Field name="blogImageLink" component={this.bindTextRender('Image Link')}  type="text" />
				{/*<Field name="BlogImage" component={this.renderFile} />*/}
				<br />
				<button type="submit">Add</button>

			</form>
		)
	}

}



AddForm = reduxForm({
	// a unique name for the form
	form: 'AddForm'
})(AddForm)


export default AddForm;