import { useCallback, useState } from "react"
import { useThrottle } from "../hooks/useThrottle"
import { css } from "@emotion/css"


type Props = {
   value: string
   onValueUpdated: (newValue: string) => void
}

export const InputText = (
   props: Props
) => {

   const {
      value,
      onValueUpdated,
   } = props

   const [internalValue, setInternalValue] = useState(value)

   const updateValue = useCallback((newValue: string) => {
      setInternalValue(newValue)
      updateValueDebounced(newValue)
   }, [setInternalValue])

   const updateValueDebounced = useThrottle((newValue: string) => {
      onValueUpdated(newValue)
   })


   return (
      <textarea
         className={css`
            border: 1px solid #fff;
            border-radius: 10px;
            background-color: #ccc;
            padding: 10px;
         `}
         value={internalValue}
         onChange={(e) => updateValue(e.target.value)}
         rows={1}
      />
   )
}
