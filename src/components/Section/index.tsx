import type { ReactNode } from 'react'
import Container from '../Container'
import styles from './styles.module.sass'

interface SectionProps {
  id?: string
  title?: string
  children: ReactNode
  alternate?: boolean
  className?: string
}

export default function Section({
  id,
  title,
  children,
  alternate = false,
  className,
}: SectionProps) {
  const classNames = [
    styles.section,
    alternate ? styles.alternate : '',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <section id={id} className={classNames}>
      <Container>
        {title && <h2 className={styles.title}>{title}</h2>}
        {children}
      </Container>
    </section>
  )
}
