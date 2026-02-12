import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import PlanetDetail from './pages/PlanetDetail'
import './App.css'

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/planets/:id" element={<PlanetDetail />} />
            </Routes>
        </Router>
    );
}

export default App
