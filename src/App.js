import {Routes, Route} from "react-router-dom";
import './App.css';
import Home from "./pages/home";
import Resume from "./pages/resume";
import Projects from "./pages/projects";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/resume" element={<Resume/>}/>
                <Route path="/projects" element={<Projects/>}/>
            </Routes>
        </div>
    );
}

export default App;
