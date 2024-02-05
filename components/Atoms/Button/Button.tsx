import React from 'react'


interface props {
  text?: string,
  onClick?: any,
  type?: any
  className?: string
  disabled?: boolean
}

function Button(props:props) {
    const {text,onClick,type,className,disabled} = props
  return (
      <button onClick={onClick} type={type} className={className} disabled={disabled}>{text}</button>
  )
}

export default Button