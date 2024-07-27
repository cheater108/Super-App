import React, { createContext, useEffect, useState } from "react";
import validateForm from "../utils/validateForm";
export const AppContext = createContext();
function AppProvider({ children }) {
    const [user, setUser] = useState(
        JSON.parse(localStorage.getItem("user")) || {
            email: "",
            name: "",
            username: "",
            phone: "",
            consent: false,
        }
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
