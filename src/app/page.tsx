import { currentPresentationConfig } from "@/presentation-config";
import { GitHubRepoLink } from "./components/GitHubRepoLink";
import { LinkedInLink } from "./components/LinkedInLink";
import styles from "./page.module.css";
import { SurveyForm } from "./survey/SurveyForm";

export default function Home() {
  const presentationConfig = currentPresentationConfig;

  return (
    <main className={styles.main}>
      <SurveyForm presentationConfig={presentationConfig} />

      <div>
        {presentationConfig.githubRepoUrl &&
          presentationConfig.gitHubRepoName && (
            <GitHubRepoLink
              ownerName="toddwashere"
              repoName={presentationConfig.gitHubRepoName}
              url={presentationConfig.githubRepoUrl}
            />
          )}

        {presentationConfig.linkedInProfileUrl && (
          <LinkedInLink
            profileName={presentationConfig.linkedInProfileName}
            url={presentationConfig.linkedInProfileUrl}
          />
        )}
      </div>
    </main>
  );
}
