```javascript
import React,{Component} from 'react'
import { Modal, Button  } from 'xr-component'

export default class Example1 extends Component {

	showModal(){
		Modal.show( {
			title:"Basic Modal",
			children:(<div><p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p></div>)
		})
	}

	async showModal1(){
		//ok:true, cancel:false
		let ret = await Modal.show( {
			title:"Basic Modal",
			children:(<div><p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p></div>)
		})

		console.log(ret)
	}

	render() {
		return (
			<div>
		 		<Button onClick={::this.showModal}>Modal</Button>
		 		<br />
		 		<br />
		 		<Button onClick={::this.showModal1}>需要知道是否点击的OK</Button>
		  	</div>
		)
	}
}
```