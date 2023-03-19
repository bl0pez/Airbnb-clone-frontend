import { createContext, useEffect, useState } from 'react';
import { backendApi } from '../api';

export const UserContext = createContext({});

export const UserContextProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const validateUser = async () => {
        const response = await backendApi.get('/renew');
        setUser(response.data.user);
    }

    useEffect(() => {
        validateUser();
    }, []);
    
    
    return (
        <UserContext.Provider value={{ user, setUser }}>
        {children}
        </UserContext.Provider>
    );
}