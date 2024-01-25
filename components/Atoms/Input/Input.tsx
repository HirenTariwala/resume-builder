import React from 'react'
interface props {
    onChange: any,
    type: any,
    className: string,
    placeholder: string,
    value: string| number
  }
function Input(props: props) {
    const {onChange,placeholder,type,className,value} = props;
  return (
      <input value={value} onChange={onChange} type={type} className={className} placeholder={placeholder} />
  )
}

export default Input