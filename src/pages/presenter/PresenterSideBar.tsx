import { Clock } from "@/app/components/Clock";
import { css } from "@emotion/css";

export type ViewType = "presentation" | "results1" | "results2"

type Props = {
    currentView: ViewType
    setCurrentView: (view: ViewType) => void
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
                    font-size: 1.7em;
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

                <div className={css`
                    margin-top: 20px;
                    text-align: center;
                    opacity: 0.8;
                `}>⬆<br />
                    Includes a GitHub link <br />
                    to the code examples
                </div>


            </div>





            <div className={css`
                    width: 100%;
                    text-align: center;
                    display: flex;
                    align-items: center;
                    flex-direction: column;
                `}>
                <div className={css`
                    width: 100px;
                    display: flex;
                    justify-content: center;
                    margin-bottom: 100px;
                `}>
                    <img src="/images/utahjs_400x400.png"
                        className={css`
                            width: 100%;
                        `} />
                </div>

                {/* Bottom Footer */}
                <div className={css`
                height: 36px;
                width: calc(100% - 10px);
                background-color: rgba(241, 243, 244, 0.949);
                display: flex;
                justify-content: end;
                align-items: center;
                gap: 5px;
                padding-right: 10px;
                color: #444;
                & > button {
                    border: 1px solid #444;
                    border-width: 4px 1px;
                    border-radius: 2px;
                }
            `}>
                    <Clock />
                    <button
                        onClick={() => setCurrentView("presentation")}
                    >
                        Home
                    </button>

                    <button
                        onClick={() => setCurrentView("results1")}
                    >
                        Q1
                    </button>

                    <button
                        onClick={() => setCurrentView("results2")}
                    >
                        Q2
                    </button>


                </div>
            </div>
        </div>
    )

}

export default PresenterSideBar;
