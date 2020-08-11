import React, {useState, createContext} from 'react';

const AppContext = createContext();

export const AppProvider = ({children}) => {

    const [keyActive, setKeyActive] = useState('Recomendados');

    return(
        <AppContext.Provider value={[keyActive, setKeyActive]}>
            {children}
        </AppContext.Provider>
    );
}

export default AppContext;