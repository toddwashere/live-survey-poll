"use client"
import { useCallback, useEffect, useState } from "react"
import { useKeyDownHandler } from "./useKeyDownHandler"
import { SurveyQuestion } from "./Questions"
import { IAnswer } from "./Answers"
import { css } from "@emotion/css"
import { InputText } from "../copmonents/InputText"


type Props = {
    question: SurveyQuestion
}
export const SurveyFormQuestion = ({
    question,
}: Props) => {

    useEffect(() => {
        const rawThingsInTheWay = localStorage.getItem(question.type)
        if (rawThingsInTheWay) {
            const answers: IAnswer[] = JSON.parse(rawThingsInTheWay) as IAnswer[]
            setAnswers(answers)
        }
    }, [])


    const [answers, setAnswers] = useState<IAnswer[]>([])
    const [pendingAnswerToAdd, setPendingAnswerToAdd] = useState<string>("")
    console.log("thingsInTheWay", answers)
    useKeyDownHandler(async (event) => {
        if (event.key === "Enter") {
            await addThing()
        }
    })

    const addThing = useCallback(async () => {

        setPendingAnswerToAdd("")

        console.log("now calling")

        const response = await fetch(`/api/Survey?q=${question.type}`, {
            method: "POST",
            body: JSON.stringify({
                name: pendingAnswerToAdd
            })
        })

        const answerWithId = await response.json() as IAnswer
        console.log("answerWithId = ", answerWithId)

        setAnswers([...answers, answerWithId])
        localStorage.setItem(question.type, JSON.stringify(answers))

    }, [answers, pendingAnswerToAdd])


    const updateThing = useCallback(async (thing: IAnswer) => {
        console.log("UpdateThing() ", { thing })
        const response = await fetch(`/api/Survey?q=${question.type}`, {
            method: "PUT",
            body: JSON.stringify(thing)
        })
    }, [answers])


    return (
        <div>

            <h2>
                {question.value}
            </h2>

            {answers.map((thing, key) =>
                <div key={key}
                    className={css`
                    padding: 5px;
                `}>
                    <InputText
                        value={thing.name}
                        onValueUpdated={(newValue: string) => {
                            const updates = {
                                ...thing,
                                name: newValue,
                            }
                            updateThing(updates)
                        }}
                    />
                </div>
            )}

            <InputText
                value={pendingAnswerToAdd}
                onValueUpdated={setPendingAnswerToAdd}
            />
            <input
                type="text"
                value={pendingAnswerToAdd}
                placeholder="Type here ..."
                onChange={(e) => setPendingAnswerToAdd(e.target.value)}
            />
            <button
                onClick={addThing}>
                Add
            </button>


        </div>
    )
}

