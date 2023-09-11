import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from "./components/Navigation";
import Home from './components/Home';
import About from './components/AboutUs';
import Blog from './components/Blog';
import Release from './components/Releases';

function App() {
    return (
        <BrowserRouter>
            <Navigation/>
            <Routes>
                <Route path="/" exact element={Home} />
                <Route path="/about" element={About} />
                <Route path="/blog" element={Blog} />
                <Route path="/release" element={Release} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
