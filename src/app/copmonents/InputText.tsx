import { useCallback, useState } from "react"
import { useThrottle } from "../hooks/useThrottle"
import { css } from "@emotion/css"


type Props = {
   value: string
   onValueUpdated: (newValue: string) => void
   placeholder?: string
}

export const InputText = ({
   value,
   onValueUpdated,
   placeholder,
}: Props) => {


   const [internalValue, setInternalValue] = useState(value)

   const updateValue = useCallback((newValue: string) => {
      setInternalValue(newValue)
      onValueUpdated(newValue)
   }, [setInternalValue])


   return (
      <textarea
         className={css`
            color: #fff;
            border: 1px solid transparent;
            background-color: transparent;
            border-radius: 10px;
            padding: 10px;
            width: 100%;
            &:focus {
               outline: none;
               & button { 
                  border-bottom-left-radius: 0;
                  border-top-left-radius: 0;
                  border-left: 1px solid blue;
               }
            }
         `}
         value={internalValue}
         onChange={(e) => updateValue(e.target.value)}
         placeholder={placeholder}
         rows={1}
      />
   )
}
