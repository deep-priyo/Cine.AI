import React from 'react';
import { CssBaseline } from '@mui/material';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Movies from "./Movies/Movies.jsx";
import MovieInformation from "./MovieInformation/MovieInformation.jsx";
import Actors from "./Actors/Actors.jsx";
import Profile from "./Profile/Profile.jsx";
import NavBar from "./NavBar/NavBar.jsx";
import useStyles from "./styles";
const App = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <BrowserRouter>
            <CssBaseline />
            <NavBar/>
            <main className={classes.content}>
                <div className={classes.toolbar}/>
                <Routes>
                    <Route path="/" element={<Movies />} />
                    <Route path="/movies/:id" element={<MovieInformation/>} />
                    <Route path="/actors/:id" element={<Actors/>} />
                    <Route path="/profile/:id" element={<Profile/>} />
                </Routes>
            </main>
        </BrowserRouter>
        </div>

    );
};

export default App;
