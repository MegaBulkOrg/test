import Section from '../../components/Section'
import Container from '../../components/Container'
import Button from '../../components/Button'
import styles from './styles.module.sass'

const PROGRAM_TOPICS = [
  {
    title: 'Базовый синтаксис JavaScript',
    description:
      'Структура кода, операторы, условия, циклы — фундамент для написания любых скриптов.',
  },
  {
    title: 'Переменные и типы данных',
    description:
      'Объявление переменных, примитивные и ссылочные типы, приведение типов.',
  },
  {
    title: 'Функции',
    description:
      'Объявление, параметры, возвращаемые значения, области видимости.',
  },
  {
    title: 'Работа с объектами',
    description: 'Создание объектов, доступ к свойствам, массивы, перебор данных.',
  },
  {
    title: 'Основы работы с API Р7-Офис',
    description:
      'Обзор объектной модели документов, базовые методы для создания макросов.',
  },
]

const AUDIENCE_ITEMS = [
  {
    icon: '👤',
    text: 'Сотрудники без опыта программирования, которым предстоит работать с макросами',
  },
  {
    icon: '💻',
    text: 'Пользователи Р7-Офис, желающие автоматизировать рутинные операции',
  },
  {
    icon: '⚙️',
    text: 'Специалисты, которые будут автоматизировать внутренние процессы организации',
  },
]

const FORMAT_ITEMS = [
  {
    title: 'Формат проведения',
    description:
      'Занятия проводятся в онлайн- или офлайн-формате в зависимости от возможностей подразделения.',
  },
  {
    title: 'Практические задания',
    description:
      'Каждая тема сопровождается практическими упражнениями для закрепления материала.',
  },
  {
    title: 'Примеры макросов',
    description:
      'В ходе курса разбираются готовые примеры макросов для типовых задач в Р7-Офис.',
  },
]

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section id="hero" className={styles.hero}>
        <Container>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>
              Основы JavaScript
              <span className={styles.heroAccent}>для сотрудников Р7-Офис</span>
            </h1>
            <p className={styles.heroDescription}>
              Внутренний курс для сотрудников, которые будут писать макросы
              в&nbsp;Р7-Офис. Без лишней теории — только то, что нужно для
              работы.
            </p>
            <Button href="#about">Подробнее</Button>
          </div>
        </Container>
      </section>

      {/* О курсе */}
      <Section id="about" title="О курсе">
        <div className={styles.aboutGrid}>
          <div className={styles.aboutCard}>
            <h3 className={styles.aboutCardTitle}>Что это за курс</h3>
            <p className={styles.aboutCardText}>
              Практический курс по основам JavaScript, разработанный специально
              для сотрудников организации. Курс даёт минимально необходимую базу
              для самостоятельного написания макросов в среде Р7-Офис.
            </p>
          </div>
          <div className={styles.aboutCard}>
            <h3 className={styles.aboutCardTitle}>Какую задачу решает</h3>
            <p className={styles.aboutCardText}>
              Подготовить сотрудников к написанию макросов для автоматизации
              работы в Р7-Офис. После прохождения курса участники смогут
              создавать простые скрипты и адаптировать готовые решения под свои
              задачи.
            </p>
          </div>
        </div>
      </Section>

      {/* Программа курса */}
      <Section id="program" title="Программа курса" alternate>
        <div className={styles.programList}>
          {PROGRAM_TOPICS.map((topic, index) => (
            <div key={index} className={styles.programItem}>
              <div className={styles.programNumber}>{index + 1}</div>
              <div>
                <h3 className={styles.programItemTitle}>{topic.title}</h3>
                <p className={styles.programItemText}>{topic.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Для кого */}
      <Section id="audience" title="Для кого этот курс">
        <div className={styles.audienceGrid}>
          {AUDIENCE_ITEMS.map((item, index) => (
            <div key={index} className={styles.audienceCard}>
              <span className={styles.audienceIcon}>{item.icon}</span>
              <p className={styles.audienceText}>{item.text}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Формат обучения */}
      <Section id="format" title="Формат обучения" alternate>
        <div className={styles.formatGrid}>
          {FORMAT_ITEMS.map((item, index) => (
            <div key={index} className={styles.formatCard}>
              <h3 className={styles.formatCardTitle}>{item.title}</h3>
              <p className={styles.formatCardText}>{item.description}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  )
}
