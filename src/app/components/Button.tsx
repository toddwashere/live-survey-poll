import { css } from "@emotion/css"
import { useMemo } from "react"


type IntentType = "primary" | "add" | "remove"
type Props = {
   intent?: IntentType
   children?: React.ReactNode
   onClick?: () => void
   isDisabled?: boolean
}
export const Button = (props: Props) => {

   const { intent, ...args } = props
   const style = useMemo(() => {
      return getColorFromIntent(intent)
   }, [intent])

   return (
      <button
         className={css`
            border: none;
            background-color: transparent;
            color: ${style.color};
            border-radius: 10px;
            padding: 10px;
            font-weight: bold;
            min-width: 35px;
            cursor: pointer;
            &:hover {
               opacity: 0.8;
               background-color: ${style.backgroundColor};
               & path {
               fill: white;
            }
            }
            &:disabled {
               opacity: 0.1;
               cursor: not-allowed;
            }
            & path {
               fill: ${style.backgroundColor};
            }
         `}
         onClick={props.onClick}
         disabled={props.isDisabled}
      >
         {props.children}
      </button>
   )
}

export const getColorFromIntent = (intent?: IntentType) => {
   switch (intent) {
      case "add":
         return {
            backgroundColor: ColorAdd,
            color: "#222",
         }
      case "remove":
         return {
            backgroundColor: ColorRemove,
            color: "#222",
         }
      default:
         return {
            backgroundColor: "#00000033",
            color: "#ffffff66",
         }
   }
}

export const ColorAdd = "#4CAF50"
export const ColorRemove = "#f4615a"
