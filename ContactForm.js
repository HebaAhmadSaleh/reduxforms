import React from 'react'
import { Field, reduxForm, FieldProps,FieldsProps,
	 Fields, FieldArray, FieldArrayProps } from 'redux-form'

let ContactForm = props => {
	// var div = document.getElementsByTagName('div');
	// div.attribute['key']= Math.random();
	// console.log(div.attribute);
	// div.setAttribute("key",Math.random());

	const renderField = ({ input, meta, ...rest } : FieldProps) =>
	{return(
		<div>
			<input {...input} {...rest}/>
			{meta.touched && meta.error && <div>{meta.error}</div>}
		</div>
	)}

	const renderFieldArray = ({ fields } : FieldArrayProps) =>
		{console.log(fields);
			return(
			<ul>
			{fields.map((name, index, fields) => (
				<li key={index}>
					<Field
						name={`${name}.firstName`}
						type="text"
						component={renderFields}
						label="First Name"/>
					<Field
						name={`${name}.lastName`}
						type="text"
						component={renderFields}
						label="Last Name"/>
				</li>
			))}
		</ul>
		)};

	const renderFields = (fields : FieldsProps) =>{
		let arr = [];
		for (var prop in fields) {
			if(!fields[prop].length){
				arr.push(fields[prop])
			}
		}
		return(
	<div>
			{arr.map(({ input, meta, ...rest }) =>
				<div  key={Math.random()} >
					<input {...input} {...rest}/>
					{meta.touched && meta.error && <div>{meta.error}</div>}
				</div>)
			}
		</div>
		);
	}


	const { handleSubmit } = props;
	return (
		<form onSubmit={ handleSubmit }>
			<div key={Math.random()}>
				<label htmlFor="firstName">First Name</label>
				<Field name="firstName" component="input" type="text" value="heeey"/>
			</div>
			<div key={Math.random()}>
				<label htmlFor="lastName">Last Name</label>
				<Field name="lastName" component="input" type="text" />
			</div>
			<div key={Math.random()}>
				<label htmlFor="email">Email</label>
				<Field name="email" component="input" type="email" /> </div>



				<Fields names={[ 'firstField', 'secondField' ]} component={renderFields}/>
				<FieldArray name="contacts" component={renderFieldArray}/>

				<button type="submit">Submit</button>
		</form>
	)
}

ContactForm = reduxForm({
	// a unique name for the form
	form: 'contact'
})(ContactForm)


export default ContactForm;