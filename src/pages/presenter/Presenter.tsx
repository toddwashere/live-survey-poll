import { Results } from "@/app/survey/Results"
import { css } from "@emotion/css"
import PresenterSideBar from "./PresenterSideBar"
import { useState } from "react"


const PresenterPage = () => {


  const [currentView, setCurrentView] = useState<"presentation" | "results1" | "results2">("presentation")


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
      }
    `}</style>

      <div className={css`
        width: 85%;
      `}>
        <iframe
          src="https://docs.google.com/presentation/d/e/2PACX-1vQ2N9E2MvBunjGeX8wnutukSjEZPgSFPFvWZv24YxmOcy4W5AAhoPgQY1h0oioqbHTuL41z5NgeE4fu/embed?start=false&loop=false&delayms=3000"
          width="100%"
          height="100%"
          frameBorder={0}
        ></iframe>
      </div>

      {currentView === "results1" &&
        <div className={css`
        border: 1px solid green;
        position: absolute;
        top: 20px;
        left: 20px;
        right: 16%;
        bottom: 20px;
        background-color: #000000f9;
        -webkit-box-shadow: 0px 0px 25px 10px #FFFFFF; 
        box-shadow: 0px 0px 25px 10px #FFFFFF;
        transition: all 0.5s ease-in-out;
        border-radius: 25px;
        background-color: #333443;
        `}>
          <Results />
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
