import React from 'react'
import { Field, reduxForm, FieldProps } from 'redux-form';
import { FormControl, FormGroup, ControlLabel, HelpBlock } from 'react-bootstrap';
import  style from './style'
class  AddForm extends React.Component {

    constructor(props){
		super(props);
		this.state={

		}
	}


	   renderTextField = ({
		input,
		label,
		meta: { touched, error },
		...custom
	  }) =>
		<FormControl
		type="text"
		{...input}
		{...custom}
		placeholder="Enter text"
	  />

	  renderSelectField = ({
		input,
		label,
		meta: { touched, error },
		children,
		...custom
	  }) =>{

		//console.log(this.props.store.getState().BlogReducer.categories);
		  return(
				<FormControl componentClass="select" placeholder="select"
				{...input}
				{...custom}>
        <option value="select">select</option>
			  {this.props.store.getState().BlogReducer.categories.map((category)=>{
					return(<option key={category.id} value={category.id}>{category.name}</option>)
			})}
			</FormControl>

		  )
	  }

	render(){

		const { handleSubmit } = this.props;
		return (
			<form onSubmit={ handleSubmit }>

					<Field style={style.textField} name="title" component={this.renderTextField}  type="text"/>
					<br/>
					<Field name="description" component={this.renderTextField}  type="text"/>
					<br/>
					<Field name="Category" component={this.renderSelectField}  />
					<br/>

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