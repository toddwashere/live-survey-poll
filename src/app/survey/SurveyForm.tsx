"use client"
import { css } from "@emotion/css"
import Head from 'next/head';
import { SurveyFormQuestion } from "./SurveyFormQuestion"
import { PresentationConfig } from "@/presentation-config";


export const SurveyForm = ({ presentationConfig }: { presentationConfig: PresentationConfig }) => {


    return (
        <div className={css`
            display: flex;
            flex-direction: column;
            gap: 10px;
            width: 100%;
            max-width: 250px;
            border-bottom: 1px solid #777;
            padding-bottom: 20px;
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
                    <img src={presentationConfig.conferenceLogoUrl}
                        className={css`
                            width: 100%;
                        `} />
                </div>
                <div>
                    Live Poll
                </div>
            </div>
            {presentationConfig.questions.map((question, key) =>
                <SurveyFormQuestion
                    key={key}
                    question={question}
                />
            )}

        </div>
    )
}
