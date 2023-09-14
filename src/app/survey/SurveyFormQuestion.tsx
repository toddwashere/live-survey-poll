"use client"
import { useCallback, useEffect, useState } from "react"
import { useKeyDownHandler } from "./useKeyDownHandler"
import { SurveyQuestion } from "./Questions"
import { IAnswer } from "./Answers"
import { css } from "@emotion/css"
import { InputTextWithButton } from "../copmonents/InputTextWithButton"


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
    console.log("answers", answers)


    const [isSavingNew, setIsSavingNew] = useState<boolean>(false)
    const addThing = useCallback(async (valueToAdd: string) => {
        console.log("now calling addThing() valueToAdd = ", valueToAdd)

        setIsSavingNew(true)

        const response = await fetch(`/api/Survey?q=${question.type}`, {
            method: "POST",
            body: JSON.stringify({
                name: valueToAdd
            })
        })

        const answerWithId = await response.json() as IAnswer
        console.log("answerWithId = ", answerWithId)

        setAnswers(prev => {
            const updated = [...prev, answerWithId]
            localStorage.setItem(question.type, JSON.stringify(updated))
            return updated
        })
        setIsSavingNew(false)
        setPendingAnswerToAdd("")

    }, [answers, setPendingAnswerToAdd, setIsSavingNew])


    const updateThing = useCallback(async (thing: IAnswer) => {
        console.log("UpdateThing() ", { thing })
        setAnswers(prev => {
            const index = prev.findIndex(x => x.id === thing.id)
            const updated = [...prev]
            updated[index] = thing
            localStorage.setItem(question.type, JSON.stringify(updated))
            return updated
        })
        await fetch(`/api/Survey?q=${question.type}`, {
            method: "PUT",
            body: JSON.stringify(thing)
        })
    }, [answers])

    const removeThing = useCallback(async (thing: IAnswer) => {
        console.log("RemoveThing() ", { thing })
        setAnswers(prev => {
            const updated = prev.filter(x => x.id !== thing.id)
            localStorage.setItem(question.type, JSON.stringify(updated))
            return updated
        })
        await fetch(`/api/Survey?q=${question.type}`, {
            method: "DELETE",
            body: JSON.stringify(thing)
        })
    }, [answers])


    return (
        <div>

            <h2 className={css`
                font-size: 1em;
            `}>
                {question.value}
            </h2>

            {answers.map((thing, key) =>
                <div key={key}>
                    <InputTextWithButton
                        value={thing.name}
                        onValueUpdated={(newValue: string) => {
                            const updates = {
                                ...thing,
                                name: newValue,
                            }
                            updateThing(updates)
                        }}
                        buttonAction="remove"
                        onButtonClick={() => removeThing(thing)}
                        buttonIsDisabled={false}
                    />

                </div>
            )}

            <div>
                {isSavingNew &&
                    <div className={css`
                        padding: 10px;
                        font-style: italic;
                        font-size: small;
                    `}>
                        <span>
                            {pendingAnswerToAdd}
                        </span>
                        <span className={css`
                            margin-left: 3px;
                        `}>
                            ...
                        </span>
                    </div>
                }
                {!isSavingNew &&
                    <InputTextWithButton
                        value={pendingAnswerToAdd}
                        placeholder="Type here to add ..."
                        onValueUpdated={setPendingAnswerToAdd}
                        buttonAction="add"
                        buttonIsDisabled={pendingAnswerToAdd.length === 0 || isSavingNew}
                        onButtonClick={async (value: string) => await addThing(value)}
                    />
                }


            </div>


        </div>
    )
}
