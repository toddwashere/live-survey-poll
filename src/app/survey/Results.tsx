
"use client"
import { useCallback, useEffect, useState } from "react"
import { SurveyEntry } from "./SurveyEntry"
import { css } from "@emotion/css"


type GroupedEntry = {
    k: string,
    v: string[],
}

export const Results = () => {

    const [isLoading, setIsLoading] = useState<boolean>(true)
    const [thingsInTheWay, setThingsInTheWay] = useState<string[]>([])
    const [thingsInTheWayGrouped, setThingsInTheWayGrouped] = useState<GroupedEntry[]>([])

    useEffect(() => {

        getThingsInTheWay()

    }, [])
    console.log("thingsInTheWay = ", { thingsInTheWay })

    const getThingsInTheWay = useCallback(async () => {
        setIsLoading(true)
        try {

            const response = await fetch("/api/SurveyResults", {
                method: "GET"
            })

            const rawEntries = await response.text()
            const entries = JSON.parse(rawEntries) as string[]
            console.log("entries", { entries })

            setThingsInTheWay(entries)
        } catch (e) {
            console.error("error = ", e)
        }
        setIsLoading(false)

    }, [setThingsInTheWay, setIsLoading])

    const getThingsInTheWayGrouped = useCallback(async () => {
        setIsLoading(true)
        try {

            const response = await fetch("/api/SurveyResultsGrouped", {
                method: "GET"
            })

            const rawEntries = await response.text()
            const entries = JSON.parse(rawEntries) as GroupedEntry[]
            console.log("entries", { entries })

            setThingsInTheWayGrouped(entries)
        } catch (e) {
            console.error("error = ", e)
        }
        setIsLoading(false)

    }, [setThingsInTheWayGrouped, setIsLoading])



    return (
        <div className={css`
            margin: 20px 2px;
            padding: 0 20px;
            display: flex;
            flex-direction: column;
            overflow: auto;
            max-height: calc(100vh - 96px);
        `}>
            <h2>
                As software engineers / developers, what things get in the way of us doing our jobs?
            </h2>

            <div>
                {thingsInTheWay?.length > 0 && thingsInTheWay.map((thing, key) =>
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

            <button onClick={async () => await getThingsInTheWay()}>
                Refresh
            </button>

            <div>
                {thingsInTheWayGrouped?.length > 0 && thingsInTheWayGrouped.map((thing, key) =>
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

            <button onClick={async () => await getThingsInTheWayGrouped()}>
                Group with AI
            </button>


        </div>
    )
}
