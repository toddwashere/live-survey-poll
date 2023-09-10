import { throttle } from "lodash";
import { useCallback, useEffect, useRef } from "react";

export function useThrottle(
   callback: Function,
   delay = 1000,
   options = { leading: true, trailing: true }
) {
   const callbackRef = useRef(callback);

   useEffect(() => { callbackRef.current = callback; });
   return useCallback(
      throttle((...args) => callbackRef.current(...args), delay, options),
      [delay]
   );
}
