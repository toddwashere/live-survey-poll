import { GitHubRepoLink } from './components/GitHubRepoLink'
import { LinkedInLink } from './components/LinkedInLink'
import styles from './page.module.css'
import { SurveyForm } from './survey/SurveyForm'

export default function Home() {
  return (
    <main className={styles.main}>

      <SurveyForm />


      <div>

        {/* <GitHubRepoLink
          ownerName="toddwashere"
          repoName="ai-cookbook-learning"
          url="https://github.com/toddwashere/ai-cookbook-learning/tree/main/api/src/examples"
        /> */}

        <LinkedInLink
          profileName="Todd B Fisher"
          url="https://www.linkedin.com/in/todd-b-fisher/"
        />

      </div>
    </main>
  )
}
