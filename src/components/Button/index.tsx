import type { ButtonHTMLAttributes, ReactNode } from 'react'
import styles from './styles.module.sass'

type ButtonVariant = 'primary' | 'secondary'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  variant?: ButtonVariant
  href?: string
}

export default function Button({
  children,
  variant = 'primary',
  href,
  className,
  ...rest
}: ButtonProps) {
  const classNames = [styles.button, styles[variant], className]
    .filter(Boolean)
    .join(' ')

  if (href) {
    return (
      <a href={href} className={classNames}>
        {children}
      </a>
    )
  }

  return (
    <button className={classNames} {...rest}>
      {children}
    </button>
  )
}
