import {useContext, ReactNode, createContext, useState, useEffect} from 'react'

export interface User {
    id: string;
    name: string;
}

interface AuthContextProps {
    user: User;
    handleLogin: (user: User) => void;
    isLogged: boolean;
    handleLogout: () => void;
}

interface UserStoraged extends User {
    isLogged: boolean;
}

const initialState = {

} as AuthContextProps;

const AuthContext = createContext<AuthContextProps>(initialState);

export const AuthProvider = ({children}: {children: ReactNode}) => {
    
    const [user, setUser] = useState<User>({} as User);
    const [isLogged, setIsLogged] = useState(false);

    const localStorageKey = 'poc-testes/user-login'

    useEffect(() => {
        const dataStoraged = localStorage.getItem(localStorageKey);
        if(dataStoraged){
            const response = JSON.parse(dataStoraged) as UserStoraged;

            setIsLogged(response.isLogged);
            setUser({name: response.name, id: response.id})
        }
    }, [])

    const handleLogin = (user: User) => {
        setUser(user);
        setIsLogged(true);
        localStorage.setItem(localStorageKey, JSON.stringify({...user, isLogged: true}))
    }

    const handleLogout = () => {
        setUser(user);
        setIsLogged(false);
        localStorage.removeItem(localStorageKey);
    }

    return (
        <AuthContext.Provider value={{user, handleLogin, isLogged, handleLogout}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext);