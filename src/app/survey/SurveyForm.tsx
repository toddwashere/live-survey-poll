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
        `}>
            {surveyQuestions.map((question, key) =>
                <SurveyFormQuestion
                    key={key}
                    question={question}
                />
            )}

        </div>
    )
}
