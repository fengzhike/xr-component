import React from 'react'
import {Upload} from 'antd'
import classNames from 'classnames'

export default function UploadComponent(props){
	let className = classNames({
		'xr-upload' :true,
		[props.className] : !!props.className
	})
	return <Upload {...props} className={className} />
}
