import { css } from "@emotion/css"
import { useEffect, useState } from "react"


export const Clock = () => {

   const [time, setTime] = useState(new Date().toLocaleTimeString())
   useEffect(() => {
      const interval = setInterval(() => {
         setTime(new Date().toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' }))
      }, 1000)
      return () => clearInterval(interval)
   }, [])


   return (
      <div className={css`
         font-size: small;
         display:inline-block;
      `}>
         {time}
      </div>

   )
}
