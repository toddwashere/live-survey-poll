
"use client"
import { useCallback, useEffect, useState } from "react"
import { SurveyEntry } from "./SurveyEntry"


export const Results = () => {

    const [isLoading, setIsLoading] = useState<boolean>(true)
    const [thingsInTheWay, setThingsInTheWay] = useState<SurveyEntry[]>([])

    useEffect(() => {

        getResults()

    }, [])
    console.log("thingsInTheWay", thingsInTheWay)

    const getResults = useCallback(async () => {
        setIsLoading(true)
        const response = await fetch("/api/SurveyResults", {
            method: "GET"
        })

        console.log("GOT response: ", response)
        const entries = JSON.parse(await response.text()) as SurveyEntry[]
        console.log("entries", entries)
        setThingsInTheWay(entries)
        setIsLoading(false)

    }, [setThingsInTheWay, setIsLoading])


    return (
        <div>
            <h2>
                As software engineers / developers, what things get in the way of us doing our jobs?
            </h2>

            {thingsInTheWay.map((thing, key) =>
                <div key={key}>{thing.name}</div>
            )}

            <div>
                {isLoading && "Loading..."}
            </div>

            <button onClick={async () => await getResults()}>
                Refresh
            </button>

        </div>
    )
}
