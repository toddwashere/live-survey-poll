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
         background-color: #222;
         margin-bottom: 5px;
         cursor: pointer;
         &:focus-within {
            border-color: #444;
            background-color: #222;
            & button {
               opacity: 1;
            }
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
                  <IconAdd />
               </Button>
            }
            {buttonAction === "remove" &&
               <Button
                  intent="remove"
                  onClick={() => onButtonClick(internalValue)}
                  isDisabled={buttonIsDisabled}
               >
                  <IconRemove />
               </Button>
            }
         </div>
      </div>
   )
}


const IconAdd = () => {
   return (
      <svg
         width="24"
         height="24"
         viewBox="0 0 24 24">
         <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4ZM12.0005 6.75736C12.5527 6.75736 13.0005 7.20507 13.0005 7.75736V11H16.2426C16.7949 11 17.2426 11.4477 17.2426 12C17.2426 12.5523 16.7949 13 16.2426 13H13.0005V16.2426C13.0005 16.7949 12.5527 17.2426 12.0005 17.2426C11.4482 17.2426 11.0005 16.7949 11.0005 16.2426V13H7.75736C7.20507 13 6.75736 12.5523 6.75736 12C6.75736 11.4477 7.20507 11 7.75736 11H11.0005V7.75736C11.0005 7.20507 11.4482 6.75736 12.0005 6.75736Z" fill="black" />
      </svg>
   )
}

const IconRemove = () => {
   return (<svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="blue">
      <path
         fillRule="evenodd"
         clipRule="evenodd"
         d="M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12ZM4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12ZM7.75736 13C7.20507 13 6.75736 12.5523 6.75736 12C6.75736 11.4477 7.20507 11 7.75736 11H16.2426C16.7949 11 17.2426 11.4477 17.2426 12C17.2426 12.5523 16.7949 13 16.2426 13H7.75736Z" fill="black" />
   </svg>)
}
