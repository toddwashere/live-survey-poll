
import { useEffect } from 'react';

type KeyDownHandler = (event: KeyboardEvent) => void;

export function useKeyDownHandler(handler: KeyDownHandler): void {
    useEffect(() => {
        const onKeyUp = (event: KeyboardEvent) => handler(event)
        window.addEventListener('keydown', onKeyUp);

        return () => {
            window.removeEventListener('keydown', onKeyUp);
        };
    }, [handler]);
}
