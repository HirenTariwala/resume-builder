import React from 'react';
interface props {
  onChange?: any;
  type: 'tel' | 'text' | 'date' | 'email' | 'checkbox';
  className?: string;
  placeholder?: string;
  value?: string | number;
  maxLength?: number;
  name?: string;
  checked?: boolean;
}
function Input(props: props) {
  const {
    onChange,
    placeholder,
    type,
    className,
    value,
    maxLength,
    name,
    checked,
  } = props;
  return (
    <input
      value={value}
      onChange={onChange}
      type={type}
      className={className}
      placeholder={placeholder}
      maxLength={maxLength}
      name={name}
      checked={checked}
    />
  );
}

export default Input;
