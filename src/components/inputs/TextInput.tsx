import React from 'react'
import clsx from 'clsx'
import styles from './TextInput.module.css'
import Link from 'next/link'

interface TextInputProps {
  label?: string
  placeholder?: string
  name: string
  value: string
  type?: "number" | "onlyLetters"
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  icon?: string
  alignEnd?: boolean
  className?: string
  disabled?: boolean
  error?: string
  min?: number
  max?: number
  onBlur?: (value: string) => void,
  onKeyPress?: React.KeyboardEventHandler<HTMLInputElement>
}

const TextInput = ({
    value,
    name,
    onChange,
    label,
    placeholder,
    type,
    icon,
    alignEnd = false,
    className,
    disabled = false,
    error,
    min,
    max,
    onBlur,
    onKeyPress,
}: TextInputProps) => {

  // const validateValue = React.useCallback((value: string) => {
  //   console.log('validating value', value)
  //   let newValue = value
  //   if (type === 'number') {
  //     newValue = value.replace(/\D/g,'') || '0'
  //     if (max && parseInt(value) > max) newValue = max.toString()
  //     if (min && parseInt(value) < min) newValue = min.toString()
  //   }
  //   if (type === 'onlyLetters') {newValue = value.replace(/[^A-Za-z!?]/g,'')}
  //   if (newValue !== value && onChange) onChange({target: {value: newValue, name}} as any)
  // }, [])

  // React.useEffect(() => {
  //   validateValue(value)
  // }, [value])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    if (type === 'number') {
      e.target.value = e.target.value.replace(/\D/g,'')// || '0'
      if (max && parseInt(e.target.value) > max) e.target.value = max.toString()
      if (min && parseInt(e.target.value) < min) e.target.value = min.toString()
    }
    if (type === 'onlyLetters') {e.target.value = e.target.value.replace(/[^A-Za-z!?]/g,'')}
    onChange && onChange(e)
  }

  const handleBlur = (e: React.FocusEvent<HTMLInputElement, Element>) => {
    if (type === 'number' && min && value==='') {
      e.target.value = min.toString()
      onChange && onChange(e)
    }
    onBlur && onBlur(e.target.value)
  }

  return (
    <div className={clsx(styles.container, className)}>
      <label className={styles.label}>{label}</label>
      <input onKeyPress={onKeyPress} onBlur={handleBlur} name={name} value={value} placeholder={placeholder} disabled={disabled} className={clsx(styles.input, disabled && styles.disabled, alignEnd && styles.right)} onChange={handleChange} />
      {/* {placeholder && <p className={styles.placeholder}>{placeholder}</p>} */}
      {error && <p className={styles.error}>error</p>}
    </div>      
  )
}

export default TextInput