import type { ReactNode } from 'react'
import styles from './styles.module.sass'

interface ContainerProps {
  children: ReactNode
  className?: string
}

export default function Container({ children, className }: ContainerProps) {
  const classNames = [styles.container, className].filter(Boolean).join(' ')

  return <div className={classNames}>{children}</div>
}
