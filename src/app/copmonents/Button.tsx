import { css } from "@emotion/css"
import { useMemo } from "react"


type Props = {
   intent?: "primary" | "add" | "remove"
   children?: React.ReactNode
   onClick?: () => void
   isDisabled?: boolean
}
export const Button = (props: Props) => {

   const { intent, ...args } = props
   const style = useMemo(() => {
      switch (intent) {
         case "add":
            return {
               backgroundColor: "#4CAF50",
               color: "#222",
            }
         case "remove":
            return {
               backgroundColor: "#f4615a",
               color: "#222",
            }
         default:
            return {
               backgroundColor: "#222",
               color: "#fff",
            }
      }
   }, [intent])

   return (
      <button
         className={css`
            border: none;
            background-color: ${style.backgroundColor};
            color: ${style.color};
            border-radius: 10px;
            padding: 10px;
            font-weight: bold;
            min-width: 35px;
            cursor: pointer;
            &:hover {
               opacity: 0.8;
               background-color: #555;
            }
            &:disabled {
               opacity: 0.1;
               cursor: not-allowed;
            }
         `}
         onClick={props.onClick}
         disabled={props.isDisabled}
      >
         {props.children}
      </button>
   )
}
