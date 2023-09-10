import { useEffect } from "react";


/** Runs a given function on key press, adding the listeners ONLY when componentHasFocus = true. */
export const useKeyDownHandlerOnFocus = (
   handler: (event: KeyboardEvent) => void,
   componentHasFocus: boolean
): void => {
   useEffect(() => {
      const onKeyUp = (event: KeyboardEvent) => handler(event)
      if (componentHasFocus) {
         window.addEventListener('keydown', onKeyUp);
      } else {
         window.removeEventListener('keydown', onKeyUp);
      }

      return () => {
         window.removeEventListener('keydown', onKeyUp);
      };

   }, [handler, componentHasFocus]);
}
