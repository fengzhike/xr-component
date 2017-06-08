import React from 'react'
import {Badge} from 'antd'
import classNames from 'classnames'

export default function BadgeComponent(props){
	let className = classNames({
		'xr-badge' :true,
		[props.className] : !!props.className
	})
	return <Badge {...props} className={className} />
}
