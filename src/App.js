import { Routes, Route } from "react-router-dom";
import './App.css';
import Home from "./pages/home";
import Resume from "./pages/resume";
import Projects from "./pages/projects";

import React, { useState, useEffect } from "react";

function App() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Wait for all resources including images to load
        const handleLoad = () => {
            // Slight delay for smoother transition
            setTimeout(() => setIsLoading(false), 800);
        };

        if (document.readyState === "complete") {
            handleLoad();
        } else {
            window.addEventListener("load", handleLoad);
            return () => window.removeEventListener("load", handleLoad);
        }
    }, []);

    if (isLoading) {
        return (
            <div style={{
                position: 'fixed',
                top: 0, left: 0, right: 0, bottom: 0,
                backgroundColor: '#ffffff',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                zIndex: 9999,
                flexDirection: 'column'
            }}>
                <div className="spinner-border text-primary" role="status" style={{ width: '10rem', height: '10rem' }}>
                    <span className="sr-only"></span>
                </div>
                <h1 className=" text-primary">Loading...</h1>
                <h4 className="mt-3 text-primary">Please Wait...</h4>
            </div>
        );
    }

    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/resume" element={<Resume />} />
                <Route path="/projects" element={<Projects />} />
            </Routes>
        </div>
    );
}

export default App;
