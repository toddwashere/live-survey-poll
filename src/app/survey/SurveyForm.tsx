"use client"
import { useCallback, useState } from "react"


export const SurveyForm = () => {

    const [thingsInTheWay, setThingsInTheWay] = useState<string[]>(["one thing", "another thing"])
    const [pendingThingToAdd, setPendingThingToAdd] = useState<string>("")
    console.log("thingsInTheWay", thingsInTheWay)

    const addThing = useCallback(async () => {

        setThingsInTheWay([...thingsInTheWay, pendingThingToAdd])
        setPendingThingToAdd("")

        console.log("now calling")

        const response = await fetch("/api/Survey", {
            method: "POST",
            body: JSON.stringify({
                name: pendingThingToAdd
            })
        })

        console.log("Posted response: ", response)

    }, [thingsInTheWay, pendingThingToAdd])


    return (
        <div>
            <h2>
                As software engineers / developers, what things get in the way of us doing our jobs?
            </h2>

            {thingsInTheWay.map((thing, key) =>
                <div key={key}>{thing}</div>
            )}

            <input
                type="text"
                value={pendingThingToAdd}
                onChange={(e) => setPendingThingToAdd(e.target.value)}
            />
            <button
                onClick={addThing}>
                Add
            </button>

        </div>
    )
}
