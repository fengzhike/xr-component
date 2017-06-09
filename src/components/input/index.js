import React from 'react'
import {Input} from 'antd'
import classNames from 'classnames'

class InputComponent extends React.Component {
	
	constructor(props) {
    	super(props)
    	this.state = { value: props.value }
  	}
	
  	componentWillReceiveProps(nextProps) {
        this.setState({value:nextProps.value})
    }


  	handleChange(e){
  		const value = (e.target.validity.valid) ? e.target.value : this.state.value
    	this.setState({ value })
    	this.props.onChange && this.props.onChange(e)
  	}

  	render(){
  		let className = classNames({
			'xr-input' :true,
			[this.props.className] : !!this.props.className
		})

  		return (
  			<Input 
  				{...this.props} 
  				value = {this.state.value}
  				className = {className} 
  				onChange = {::this.handleChange}
  			/> 
  		)
  	}
}

InputComponent.Search = Input.Search
InputComponent.Group = Input.Group

export default InputComponent

