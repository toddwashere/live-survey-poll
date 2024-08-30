import { useState } from "react"
import { css } from "@emotion/css"
import { Results } from "@/app/survey/Results"
import { surveyQuestions } from "@/app/survey/Questions"
import PresenterSideBar, { ViewType } from "./PresenterSideBar"


const PresenterPage = () => {


  const [currentView, setCurrentView] = useState<ViewType>("presentation")


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
          src="https://docs.google.com/presentation/d/18xa-r19U5R2-onJ9qKq_DbBPvMr35PT72Gm2t9dttbc/embed"
          // src="https://docs.google.com/presentation/d/e/2PACX-1vQ2N9E2MvBunjGeX8wnutukSjEZPgSFPFvWZv24YxmOcy4W5AAhoPgQY1h0oioqbHTuL41z5NgeE4fu/embed?start=false&loop=false&delayms=3000"
          width="100%"
          height="100%"
          frameBorder={0}
        ></iframe>
      </div>

      {(currentView === "results1" || currentView === "results2") &&
        <div className={css`
          position: absolute;
          top: 0;
          left: 0;
          right: 16%;
          bottom: 45px;
          background-color: #000000f9;
          background-color: #1c4587;
        `}>
          {currentView === "results1" &&
            <Results
              question={surveyQuestions[0]}
            />
          }
          {currentView === "results2" &&
            <Results
              question={surveyQuestions[1]}
            />
          }
        </div>
      }


      <PresenterSideBar
        currentView={currentView}
        setCurrentView={setCurrentView}
      />

    </div >
  )

}

export default PresenterPage
