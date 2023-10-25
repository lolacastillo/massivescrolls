import React, {useEffect} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from "./components/Navigation";
import Home from './components/Home';
import About from './components/AboutUs';
import Blog from './components/Blog';
import Release from './components/Releases';
import {db} from './firebase/config';
import {doc, getDoc} from 'firebase/firestore';

function App() {
    useEffect(function(){
        const docRef = doc(db, "releases", "1");
        getDoc(docRef).then(docSnap => {
           const release = docSnap.data();
           console.log(release);
        });
    }, []);
    return (
        <BrowserRouter>
            <Navigation/>
            <Routes>
                <Route path="/" exact element={<Home/>} />
                <Route path="/about" element={<About/>} />
                <Route path="/blog" element={<Blog/>} />
                <Route path="/release" element={<Release/>} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
