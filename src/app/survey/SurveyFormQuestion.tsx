"use client"
import { useCallback, useEffect, useState } from "react"
import { useKeyDownHandler } from "./useKeyDownHandler"
import { SurveyQuestion } from "./Questions"
import { IAnswer } from "./Answers"
import { css } from "@emotion/css"


type Props = {
    question: SurveyQuestion
}
export const SurveyFormQuestion = ({
    question,
}: Props) => {

    useEffect(() => {
        const rawThingsInTheWay = localStorage.getItem(question.id)
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

        const response = await fetch(`/api/Survey?q=${question.id}`, {
            method: "POST",
            body: JSON.stringify({
                name: pendingAnswerToAdd
            })
        })

        const answerWithId = await response.json() as IAnswer
        console.log("answerWithId = ", answerWithId)

        setAnswers([...answers, answerWithId])
        localStorage.setItem(question.id, JSON.stringify(answers))

    }, [answers, pendingAnswerToAdd])


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
                    {thing.name}
                </div>
            )}

            <input
                type="text"
                value={pendingAnswerToAdd}
                onChange={(e) => setPendingAnswerToAdd(e.target.value)}
            />
            <button
                onClick={addThing}>
                Add
            </button>


        </div>
    )
}

