import { useReducer, useEffect } from 'react'

function useLocalStorageReducer(key, defaultVal, reducer) {
    const [state, dispatch] = useReducer(reducer, defaultVal, () => {
        try {
            return JSON.parse(window.localStorage.getItem(key) || String(defaultVal))
        }
        catch (e) {
            return defaultVal
        }
    })

    useEffect(() => {
        window.localStorage.setItem(key, JSON.stringify(state));
    }, [state, key]);

    return [state, dispatch]
}

export default useLocalStorageReducer;