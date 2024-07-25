import React, { createContext, useState } from "react";

function AppProvider({ children }) {
    const AppContext = createContext();
    const [user, setUser] = useState(
        JSON.parse(localStorage.getItem("user")) || null
    );
    const [selectedGenre, setSelectedGenre] = useState(
        JSON.parse(localStorage.getItem("selectedGenre")) || []
    );
    return (
        <AppContext.Provider
            value={{
                user,
                selectedGenre,
                setUser,
                setSelectedGenre,
            }}
        >
            {children}
        </AppContext.Provider>
    );
}

export default AppProvider;
