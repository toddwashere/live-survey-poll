"use client"
import { useCallback, useState } from "react"
import { useKeyDownHandler } from "./useKeyDownHandler"


export const SurveyForm = () => {

    const [thingsInTheWay, setThingsInTheWay] = useState<string[]>(["one thing", "another thing"])
    const [pendingThingToAdd, setPendingThingToAdd] = useState<string>("")
    console.log("thingsInTheWay", thingsInTheWay)
    useKeyDownHandler(async (event) => {
        if (event.key === "Enter") {
            await addThing()
        }
    })

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

            <h2>
                What things have helped you improve your experience at work?
            </h2>


            <h2>
                Hey look mom, I'm on TV.
                Put any other thoughts here.
            </h2>

        </div>
    )
}
