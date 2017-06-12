import React from 'react'
import Select from 'ziaochina-rc-select'
import classNames from 'classnames'

function SelectComponent(props){
	let {className, notFoundContent, optionLabelProp, 
		mode, combobox, tags, multiple, size, ...otherProps} = props

	className = classNames({
		'ant-select': true,
		'xr-select' :true,
		[`ant-select-lg`]: size === 'large',
      	[`ant-select-sm`]: size === 'small',
		[className] : !!className
	})

	const isCombobox = mode === 'combobox' || combobox

	notFoundContent = notFoundContent || '无匹配结果'

	if (isCombobox) {
      notFoundContent = null;
      // children 带 dom 结构时，无法填入输入框
      optionLabelProp = optionLabelProp || 'value'
    }

    const modeConfig = {
      	multiple: mode === 'multiple' || multiple,
      	tags: mode === 'tags' || tags,
      	combobox: isCombobox,
    }


	return (<Select 
		{...otherProps} 
		{...modeConfig} 
		prefixCls='ant-select' 
		className={className} 
		optionLabelProp={optionLabelProp || 'children'}
		notFoundContent={notFoundContent}
	/>)
}

SelectComponent.Option = Select.Option
SelectComponent.OptGroup = Select.OptGroup

export default SelectComponent
