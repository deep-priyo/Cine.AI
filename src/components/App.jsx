import React from 'react';
import { CssBaseline } from '@mui/material';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Movies from "./Movies/Movies.jsx";
import MovieInformation from "./MovieInformation/MovieInformation.jsx";
import Actors from "./Actors/Actors.jsx";
import Profile from "./Profile/Profile.jsx";

const App = () => {
    return (
        <BrowserRouter>
            <CssBaseline />
            <main>
                <Routes>
                    <Route path="/" element={<h1>Home</h1>} />
                    <Route path="/movies" element={<Movies />} />
                    <Route path="/movies/:id" element={<MovieInformation/>} />
                    <Route path="/actors/:id" element={<Actors/>} />
                    <Route path="/profile/:id" element={<Profile/>} />
                </Routes>
            </main>
        </BrowserRouter>
    );
};

export default App;
