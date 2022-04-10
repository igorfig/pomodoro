import { useState, useEffect, useCallback, useContext, createContext } from 'react';

import { Storage } from '../utils/storage';

const userPreferencesContext = createContext({});


export function UserPreferencesProvider({ children }) {
    const [userPreferences, setUserPreferences] = useState(() => Storage.get()); 

    const updatePreferences = useCallback(value => setUserPreferences(value), [])

    useEffect(() => {
        Storage.set(userPreferences);
    }, [userPreferences])

    return <userPreferencesContext.Provider value={{userPreferences, updatePreferences}}>
        {children}
    </userPreferencesContext.Provider>
}

export const usePreferences = () => useContext(userPreferencesContext);
