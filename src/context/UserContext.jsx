import { createContext, useEffect, useState } from 'react';
import { backendApi } from '../api';

export const UserContext = createContext({});

export const UserContextProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const validateUser = async () => {
        try {
            const response = await backendApi.get('/renew');
            setUser(response.data.user);
            setLoading(false);
        } catch (error) {
            setLoading(false);
        }
    }

    useEffect(() => {
        validateUser();
    }, []);


    return (
        <UserContext.Provider value={{ user, setUser, setLoading, loading }}>
            {children}
        </UserContext.Provider>
    );
}