import { css } from "@emotion/css";


type Props = {
    currentView: "presentation" | "results1" | "results2"
    setCurrentView: (view: "presentation" | "results1" | "results2") => void
}
const PresenterSideBar = ({
    currentView,
    setCurrentView,
}: Props) => {


    return (
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
                    <button
                        onClick={() => setCurrentView("presentation")}
                    >
                        Home
                    </button>

                    <button
                        onClick={() => setCurrentView("results1")}
                    >
                        Question 1
                    </button>

                    <button
                        onClick={() => setCurrentView("results2")}
                    >
                        Question 2
                    </button>

                </span>
            </div>
        </div>
    )

}

export default PresenterSideBar;
