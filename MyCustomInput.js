import React, { Component } from 'react'

export default class MyCustomInput extends Component {
  render() {
      console.log('this.props.input',this.props.meta);
    let value = this.props.input.value ? this.props.input.value : 0;
    let onChange = this.props.input.onChange;
    console.log(value);
    return (
      <div>
        <span>The current value is {value}.</span>
        <button type="button" onClick={() => onChange(parseInt(value) + 1)}>Inc</button>
        <button type="button" onClick={() => onChange(parseInt(value) - 1)}>Dec</button>
      </div>
    )
  }
}