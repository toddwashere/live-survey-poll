import { useState } from "react"
import { css } from "@emotion/css"
import { Results } from "@/app/survey/Results"
import PresenterSideBar, { ViewType } from "./PresenterSideBar"
import { currentPresentationConfig } from "../../presentation-config"


const PresenterPage = () => {


  const [currentView, setCurrentView] = useState<ViewType>("presentation")

  const presentationConfig = currentPresentationConfig
  const surveyQuestions = presentationConfig.questions

  return (
    <div className={css`
        height: calc(100vh - 8px);
        width: calc(100vw - 8px);
        display: flex;
        color: #FFFFFF;
        background-color: #000000;
    `}>

      <style jsx global>{`
      body {
        margin: 0px;
        padding: 0px;
        background-color: #000000;
        font-family: Arial, Helvetica, sans-serif;
      }
    `}</style>

      <div className={css`
        width: 85%;
      `}>
        <iframe
          src={presentationConfig.presentationUrl}
          // src="https://docs.google.com/presentation/d/e/2PACX-1vQ2N9E2MvBunjGeX8wnutukSjEZPgSFPFvWZv24YxmOcy4W5AAhoPgQY1h0oioqbHTuL41z5NgeE4fu/embed?start=false&loop=false&delayms=3000"
          width="100%"
          height="100%"
          frameBorder={0}
        ></iframe>
      </div>

      {(currentView === "results1" || currentView === "results2" || currentView === "results3") &&
        <div className={css`
          position: absolute;
          top: 0;
          left: 0;
          right: 16%;
          bottom: 45px;
          background-color: #000000f9;
          background-color: #1c4587;
        `}>
          {currentView === "results1" && surveyQuestions.length > 0 &&
            <Results
              question={surveyQuestions[0]}
            />
          }
          {currentView === "results2" && surveyQuestions.length > 1 &&
            <Results
              question={surveyQuestions[1]}
            />
          }
          {currentView === "results3" && surveyQuestions.length > 2 &&
            <Results
              question={surveyQuestions[2]}
            />
          }
          {surveyQuestions.length === 0 &&
            <div className={css`
              display: flex;
              justify-content: center;
              align-items: center;
              height: 100%;
            `}>
              <h1>
                No questions have been Configured yet
              </h1>
            </div>
          }
        </div>
      }


      <PresenterSideBar
        currentView={currentView}
        setCurrentView={setCurrentView}
        presentationConfig={presentationConfig}
      />

    </div >
  )

}

export default PresenterPage
