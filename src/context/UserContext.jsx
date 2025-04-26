import { createContext, useState, useContext } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(() => {
        const savedUser = localStorage.getItem('user');
        return savedUser ? JSON.parse(savedUser) : { id: null, phone: null, name: null };
    });

    const [isAuth, setIsAuth] = useState(() => {
        return localStorage.getItem('isAuth') === 'true';
    });

    const login = (userData) => {
        const newUser = {
            id: userData.id,
            phone: userData.phone,
            name: userData.name
        };
        setUser(newUser);
        setIsAuth(true);
        localStorage.setItem('user', JSON.stringify(newUser));
        localStorage.setItem('isAuth', 'true');
    };

    const logout = () => {
        setUser({ id: null, phone: null, name: null });
        setIsAuth(false);
        localStorage.removeItem('user');
        localStorage.removeItem('isAuth');
    };

    return (
        <UserContext.Provider value={{ user, isAuth, login, logout }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error('useUser must be used within a UserProvider');
    }
    return context;
};