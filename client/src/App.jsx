import RegisterPage from "./pages/RegisterPage";
import NotFoundPage from "./pages/NotFoundPage";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import GenresPage from "./pages/GenresPage";
import CaraouselPage from "./pages/CaraouselPage";
import Dashboard from "./pages/Dashboard";
import MoviesPage from "./pages/MoviesPage";
import { useContext } from "react";
import { AppContext } from "./context/AppContext";

function ProtectedPath({ children }) {
    const { user } = useContext(AppContext);
    if (user) {
        return children;
    } else {
        return <Navigate to="/register" />;
    }
}

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<RegisterPage />} />
                    <Route path="/register" element={<RegisterPage />} />
                    <Route path="/home" element={<RegisterPage />} />
                    <Route
                        path="/genres"
                        element={
                            <ProtectedPath>
                                <GenresPage />
                            </ProtectedPath>
                        }
                    />
                    <Route
                        path="/carousel"
                        element={
                            <ProtectedPath>
                                <CaraouselPage />
                            </ProtectedPath>
                        }
                    />
                    <Route
                        path="/dashboard"
                        element={
                            <ProtectedPath>
                                <Dashboard />
                            </ProtectedPath>
                        }
                    />
                    <Route
                        path="/movies"
                        element={
                            <ProtectedPath>
                                <MoviesPage />
                            </ProtectedPath>
                        }
                    />
                    <Route path="*" element={<NotFoundPage />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
