import RegisterPage from "./pages/RegisterPage";
import NotFoundPage from "./pages/NotFoundPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import GenresPage from "./pages/GenresPage";
import CaraouselPage from "./pages/CaraouselPage";
import Dashboard from "./pages/Dashboard";
import MoviesPage from "./pages/MoviesPage";

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<RegisterPage />} />
                    <Route path="/register" element={<RegisterPage />} />
                    <Route path="/home" element={<RegisterPage />} />
                    <Route path="/genres" element={<GenresPage />} />
                    <Route path="/carousel" element={<CaraouselPage />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/movies" element={<MoviesPage />} />
                    <Route path="*" element={<NotFoundPage />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
