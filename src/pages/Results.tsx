import { Results } from "@/app/survey/Results"
import { css } from "@emotion/css"


const ResultsPage = () => {

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

      <div className={css`
        width: calc(15% - 8px );
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
      `}>
        <div className={css`
          padding: 10px;
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 100%;
        `}>
          <h1>
            Live Poll
          </h1>
          <div className={css`
          font-size: 2em;
          padding-bottom: 20px;
        `}>
            utahjs.vercel.app
          </div>
          <div className={css`
            border: 1px solid black;
            max-width: 200px;
            max-height: 200px;
            background-color: #FFF;
            color: #000;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 20px;
            padding: 20px;
          `}>
            <img src="/images/qrcode.png"
              className={css`
                width: 100%;
              `}
            />
          </div>


        </div>

        <div className={css`
              width: 100%;
            `}>

          {/* Question 1 results */}
          <div>
            <p>Put question 1 results here</p>

          </div>

          {/* Question 2 results */}
          <div>
            <p>Put question 2 results here</p>

          </div>


          {/* Home tab */}
          <div className={css`
              width: 100%;
              display: flex;
              justify-content: center;
            `}>

            <div className={css`
                width: 200px;
                opacity: 0.5;
              `}>
              <img src="/images/utahjs_400x400.png"
                className={css`
                  width: 100%;
                `} />
            </div>

          </div>

        </div>
        {/* Bottom Footer */}

        <div className={css`
          height: 36px;
          width: 100%;
          background-color: rgba(241, 243, 244, 0.949);
          display: flex;
          justify-content: end;
          align-items: center;
          color: #444;
        `}>
          <span className={css`
            padding-right: 10px;
          `}>
            [home]
            [question 1 results]
            [question 2 results]
          </span>
        </div>
      </div>

    </div >
  )

}

export default ResultsPage
