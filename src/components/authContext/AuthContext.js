import { createContext, useContext, useState } from 'react';
const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
    const [user, setUser] = useState({});


    return (
        <UserContext.Provider value={{ user  }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUserAuth = () => { // Rename UserAuth to useAuth
    return useContext(UserContext);
};