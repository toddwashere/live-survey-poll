
"use client"
import { useCallback, useEffect, useState } from "react"
import { css } from "@emotion/css"
import { SurveyQuestion } from "./Questions"
import { Button } from "../copmonents/Button"


type GroupedEntry = {
    k: string,
    v: string[],
}

type Props = {
    question: SurveyQuestion
}

export const Results = ({
    question,
}: Props) => {

    const [isLoading, setIsLoading] = useState<boolean>(true)
    const [responses, setResponses] = useState<string[]>([])
    const [isGrouping, setIsGrouping] = useState<boolean>(false)
    const [responsesGrouped, setResponsesGrouped] = useState<GroupedEntry[]>([])

    useEffect(() => {

        getResponses()

    }, [])
    console.log("thingsInTheWay = ", { thingsInTheWay: responses })

    const getResponses = useCallback(async () => {
        setIsLoading(true)
        try {

            const response = await fetch(`/api/SurveyResults?q=${question.type}`, {
                method: "GET"
            })

            const rawEntries = await response.text()
            const entries = JSON.parse(rawEntries) as string[]
            console.log("entries", { entries })

            setResponses(entries)
        } catch (e) {
            console.error("error = ", e)
        }
        setIsLoading(false)

    }, [setResponses, setIsLoading])

    const getResponsesGrouped = useCallback(async () => {
        setIsGrouping(true)
        try {

            const response = await fetch(`/api/SurveyResultsGrouped?q=${question.type}`, {
                method: "GET"
            })

            const rawEntries = await response.text()
            const entries = JSON.parse(rawEntries) as GroupedEntry[]
            console.log("entries", { entries })

            setResponsesGrouped(entries)
        } catch (e) {
            console.error("error = ", e)
        }
        setIsGrouping(false)

    }, [setResponsesGrouped, setIsGrouping])



    return (
        <div className={css`
            margin: 20px 2px;
            padding: 0 20px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            overflow: auto;
            max-height: calc(100vh - 96px);
        `}>
            <h2>
                {question.value}
            </h2>

            <div className={css`
                text-align: center;
            `}>
                {responses?.length > 0 && responses.map((thing, key) =>
                    <div key={key}
                        className={css`
                            border: 1px solid #ffffff22;
                            background-color: #365ec555;
                            display:inline-block;
                            margin: 5px;
                            padding: 10px;
                            border-radius: 10px;
                        `}>
                        <h3 className={css`
                            margin: 0;
                        `}>
                            {thing}
                        </h3>
                    </div>
                )}
            </div>

            <div>
                <Button onClick={async () => await getResponses()}>
                    Refresh
                </Button>
            </div>

            <div>
                {responsesGrouped?.length > 0 && responsesGrouped.map((thing, key) =>
                    <div key={key}
                        className={css`
                            border: 1px solid #ffffff22;
                            background-color: #365ec555;
                            display:inline-block;
                            margin: 5px;
                            padding: 10px;
                            border-radius: 10px;
                    `}>
                        <h2 className={css`
                        margin: 0;
                    `}>
                            {thing.k}
                        </h2>
                        <p>
                            {thing.v.map((v, key) =>
                                <span key={key}
                                    className={css`
                                margin-right: 10px;
                                &:after {
                                    content: ", ";
                                }
                            `}
                                >
                                    {v}
                                </span>
                            )}
                        </p>
                    </div>
                )}
            </div>

            <div>
                {isLoading && "Loading..."}
            </div>

            <div>

                <Button
                    onClick={async () => await getResponsesGrouped()}>
                    Group with AI
                </Button>
            </div>

        </div>
    )
}
