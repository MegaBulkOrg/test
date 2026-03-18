import Container from '../Container'
import styles from './styles.module.sass'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.inner}>
          <p className={styles.text}>
            © {currentYear} Внутренний курс «Основы JavaScript для Р7-Офис».
            Материалы предназначены для служебного пользования.
          </p>
        </div>
      </Container>
    </footer>
  )
}
