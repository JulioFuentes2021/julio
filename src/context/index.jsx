import React from 'react'

const Context = React.createContext();

function ContextProvider(props) {
    const [darkMode, setDarkMode] = React.useState(false);

    return (
        <Context.Provider value={{
            darkMode,
            setDarkMode
        }}>
            { props.children }            
        </Context.Provider>
    )
}

export { Context, ContextProvider };
