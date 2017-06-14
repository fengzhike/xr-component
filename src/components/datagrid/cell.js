import React, {Component} from 'react'
import {Cell} from 'fixed-data-table'
import classNames from 'classnames'

export default class cellComponent extends Component{
	render(){
		const {
      		height,
	      	width,
	      	style,
	      	className,
	      	align,
	      	children,
	      	...other
    	} = this.props

    	let cls = classNames({
    		'xr-datagrid-cellContent':true,
    		[`xr-datagrid-cellContent-${align}`]: !!align,
    		[className] : !!className
    	})

	 	var innerStyle = {
  			height,
  			width,
      		...style,
    	}

    	return (
      		<div {...other} className={cls} style={innerStyle}>
              	{children}
      		</div>
    	)
	}
}