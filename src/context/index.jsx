import React from 'react'

const Context = React.createContext();

function ContextProvider(props) {
    const [darkMode, setDarkMode] = React.useState(false);
    const [showMenuMobile, setShowMenuMobile] = React.useState(false);
 
    return (
        <Context.Provider value={{
            darkMode,
            setDarkMode,
            showMenuMobile,
            setShowMenuMobile,
        }}>
            { props.children }            
        </Context.Provider>
    )
}

export { Context, ContextProvider };
