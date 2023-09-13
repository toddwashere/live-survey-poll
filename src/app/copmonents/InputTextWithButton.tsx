import React, { useCallback, useEffect, useState } from "react"
import { useThrottle } from "../hooks/useThrottle"
import { css } from "@emotion/css"
import { useKeyDownHandlerOnFocus } from "../hooks/useKeyDownHandlerOnFocus"
import { InputText } from "./InputText"
import { Button } from "./Button"


type Props = {
   value: string
   onValueUpdated?: (newValue: string) => void
   placeholder?: string
   buttonAction: "add" | "remove" | "none"
   onButtonClick: (updatedValue: string) => void
   buttonIsDisabled: boolean
}

export const InputTextWithButton = ({
   value,
   onValueUpdated,
   placeholder,
   buttonAction,
   onButtonClick,
   buttonIsDisabled,
}: Props) => {


   const [internalValue, setInternalValue] = useState(value)
   useEffect(() => {
      setInternalValue(value)
   }, [value])

   const updateValue = useCallback((newValue: string) => {
      setInternalValue(newValue)
      updateValueDebounced(newValue)
   }, [setInternalValue])

   const updateValueDebounced = useThrottle((newValue: string) => {
      onValueUpdated?.(newValue)
   })

   const [isFocused, setIsFocused] = useState<boolean>(false)

   useKeyDownHandlerOnFocus((evt) => {
      if (buttonAction === "add" && evt.key === "Enter" && isFocused) {
         onButtonClick(internalValue)
         evt.preventDefault()
      }
   }, isFocused)


   return (
      <div
         onFocus={() => setIsFocused(true)}
         onBlur={() => setIsFocused(false)}
         className={css`
         display: flex;
         justify-content: space-between;
         gap: 10px;
         border: 1px solid transparent;
         border-radius: 10px;
         &:focus-within {
            border-color: #444;
            background-color: #222;
            & button {
               visibility: visible;
            }
         }
         & button {
            visibility: hidden;
         }
      `}
      >
         <InputText
            onValueUpdated={updateValue}
            value={internalValue}
            placeholder={placeholder}
         />
         <div>
            {buttonAction === "add" &&
               <Button
                  intent="add"
                  onClick={() => onButtonClick(internalValue)}
                  isDisabled={buttonIsDisabled}
               >
                  +
               </Button>
            }
            {buttonAction === "remove" &&
               <Button
                  intent="remove"
                  onClick={() => onButtonClick(internalValue)}
                  isDisabled={buttonIsDisabled}
               >
                  -
               </Button>
            }
         </div>
      </div>
   )
}
