import {useContext, ReactNode, createContext, useState} from 'react'

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

const initialState = {

} as AuthContextProps;

const AuthContext = createContext<AuthContextProps>(initialState);

export const AuthProvider = ({children}: {children: ReactNode}) => {
    
    const [user, setUser] = useState<User>({} as User);
    const [isLogged, setIsLogged] = useState(false);

    const handleLogin = (user: User) => {
        setUser(user);
        setIsLogged(true);
    }

    const handleLogout = () => {
        setUser(user);
        setIsLogged(false);
    }

    return (
        <AuthContext.Provider value={{user, handleLogin, isLogged, handleLogout}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext);