import {Routes, Route} from "react-router-dom";
import './App.css';
import Home from "./pages/home";
import Resume from "./pages/resume";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/resume" element={<Resume/>}/>
            </Routes>
        </div>
    );
}

export default App;
