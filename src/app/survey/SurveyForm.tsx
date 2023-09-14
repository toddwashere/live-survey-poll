"use client"
import { css } from "@emotion/css"
import Head from 'next/head';
import { surveyQuestions } from "./Questions"
import { SurveyFormQuestion } from "./SurveyFormQuestion"


export const SurveyForm = () => {


    return (
        <div className={css`
            display: flex;
            flex-direction: column;
            gap: 30px;
            width: 100%;
            max-width: 250px;
        `}>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>

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
