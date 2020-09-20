import React, {createContext, useContext, useState} from 'react';

export const AuthContext = createContext({});

export const AuthContextProvider = ({children}) => {

    const [isLogged, setIsLogged] = useState(true)

    const logar = () => {
        setIsLogged(true)
    }

    const logout = () => {
        setIsLogged(false)
    }

    return (
        <AuthContext.Provider value={{isLogged, logar, logout}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext);