import React from 'react'
import clsx from 'clsx'
import styles from './Button.module.css'
import Link from 'next/link'

interface ButtonProps {
    children?: React.ReactNode
    icon?: string
    href?: string
    onClick?: (e?: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
    className?: string
    disabled?: boolean
    variant?: 'primary' | 'secondary' | 'plain'
    onKeyPress?: React.KeyboardEventHandler<HTMLButtonElement>
}

const variantStyle = {
  primary: {
    container: styles.containerPrimary
  },
  secondary: {
    container: styles.containerSecondary
  },
  plain: {
    container: styles.containerPlain
  },
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(function Button({
    children,
    variant = 'primary',
    href,
    onClick,
    onKeyPress,
    icon,
    className,
    disabled = false
}, ref){

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    onClick && onClick(e)
    !href && e.preventDefault()
  }



  return (
    <Wrapper href={href}>
      <button onKeyPress={onKeyPress} ref={ref} disabled={disabled} className={clsx(styles.container, variantStyle[variant].container, disabled && styles.disabled, className)} onClick={handleClick}>
        {icon && <i className={clsx(icon, styles.iconBase, children && styles.icon)} />}
        {children}
      </button>
    </Wrapper>
  )
})

export default Button

const Wrapper = ({children, href}: {children: React.ReactNode, href?: string}) => 
href ? <Link href={href}>{children}</Link> : <>{children}</>