import { useState, useEffect } from 'react'

function useLocalStorageState(key, defaultVal) {
    const [state, setState] = useState(() => {
        try {
            return JSON.parse(window.localStorage.getItem(key) || String(defaultVal))
        }
        catch (e) {
            return defaultVal
        }
    }
    )

    useEffect(() => {
        window.localStorage.setItem(key, JSON.stringify(state));
      }, [state, key]);

    return [state, setState]
}

export default useLocalStorageState;