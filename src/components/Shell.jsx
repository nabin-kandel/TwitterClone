import React from 'react'
import Home from '../pages/Home';
import NavBar from './NavBar';
import About from '../pages/About';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SingleTweet from '../pages/SingleTweet';
function Shell() {
    return (
        <>
            <NavBar />
            <BrowserRouter>
                <Routes>
                    <Route index element={<Home />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/:id' element={<SingleTweet />} />

                </Routes>
            </BrowserRouter>
        </>
    )
}

export default Shell;