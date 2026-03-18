import { useState } from 'react'
import Container from '../Container'
import ThemeToggle from '../ThemeToggle'
import styles from './styles.module.sass'

interface NavItem {
  label: string
  href: string
}

const NAV_ITEMS: NavItem[] = [
  { label: 'О курсе', href: '#about' },
  { label: 'Программа', href: '#program' },
  { label: 'Для кого', href: '#audience' },
  { label: 'Формат', href: '#format' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const handleNavClick = () => {
    setMenuOpen(false)
  }

  return (
    <header className={styles.header}>
      <Container className={styles.inner}>
        <a href="#hero" className={styles.logo}>
          JS для Р7-Офис
        </a>

        <nav className={`${styles.nav} ${menuOpen ? styles.navOpen : ''}`}>
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={styles.link}
              onClick={handleNavClick}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className={styles.actions}>
          <ThemeToggle />
          <button
            className={`${styles.burger} ${menuOpen ? styles.burgerOpen : ''}`}
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Открыть меню"
            type="button"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </Container>
    </header>
  )
}
