import React,{Component} from 'react'
import { Input  } from 'xr-component'

const InputNumber = Input.Number

export default class Example1 extends Component {

	render() {
		return (
			<div>
		 		<InputNumber placeholder="number"  />
		  	</div>
		)
	}
}