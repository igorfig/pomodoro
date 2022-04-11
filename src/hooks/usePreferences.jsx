import { useState, useEffect, useCallback, useContext, createContext } from 'react';

import { Storage } from '../utils/storage';

const userPreferencesContext = createContext({});


export function UserPreferencesProvider({ children }) {
    const [userPreferences, setUserPreferences] = useState(() => {
        const preferences = Storage.get();

        return preferences ? preferences : {
            'pomodoro': 25,
            'short-break': 5,
            'long-break': 15,
            'long-break-interval': 4,
            'auto-start-pomodoro': false,
            'auto-start-break': false,
            'notifications': true
        }
    }); 

    const updatePreferences = useCallback(value => setUserPreferences(value), [])

    useEffect(() => {
        Storage.set(userPreferences);
    }, [userPreferences])

    return <userPreferencesContext.Provider value={{userPreferences, updatePreferences}}>
        {children}
    </userPreferencesContext.Provider>
}

export const usePreferences = () => useContext(userPreferencesContext);
