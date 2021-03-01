import React from 'react';
export const AppContext = React.createContext({})

export const AppProvider = ({ children }) => {
    const reducer = ( state, action ) => {
        switch (action.type) {
            case "LOAD_MEMBERS":
                return { ...state, membersList: action.membersList };
            default:
                return state;
        };
    };

    const [appData, appDispatch] = React.useReducer(reducer, {
        membersList: [],
    });
    return (
        <AppContext.Provider value={{ appData, appDispatch }}>
            {children}
        </AppContext.Provider>
    )
}