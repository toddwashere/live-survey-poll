import styles from './page.module.css'
import { SurveyForm } from './survey/SurveyForm'

export default function Home() {
  return (
    <main className={styles.main}>

      <SurveyForm />

    </main>
  )
}
