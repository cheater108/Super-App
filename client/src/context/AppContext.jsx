import React, { useState } from "react";
import { useContext } from "react";

export const AppContext = useContext();
function AppProvider({ children }) {
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
