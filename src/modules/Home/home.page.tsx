import React from 'react'
import { useAuth } from '../Login/hooks/useAuth'
const HomePage = () => {
    const {user} = useAuth()
    return (
        <div>
            <p>Bem Vindo/a {user.name}</p>
        </div>
    )
}

export default HomePage
