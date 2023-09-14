"use client"
import { css } from "@emotion/css"
import { surveyQuestions } from "./Questions"
import { SurveyFormQuestion } from "./SurveyFormQuestion"


export const SurveyForm = () => {


    return (
        <div className={css`
            display: flex;
            flex-direction: column;
            gap: 30px;
            width: 100%;
            max-width: 300px;
        `}>
            <div className={css`
                display: flex;
                flex-direction: row;
                gap: 3px;
            `}>
                <div className={css`
                    width: 20px;
                `}>
                    <img src="/images/utahjs_400x400.png"
                        className={css`
                            width: 100%;
                        `} />
                </div>
                <div>
                    Live Poll
                </div>
            </div>
            {surveyQuestions.map((question, key) =>
                <SurveyFormQuestion
                    key={key}
                    question={question}
                />
            )}

        </div>
    )
}
