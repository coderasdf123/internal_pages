import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Import Navbar
import Navbar from "./components/Navbar/Navbar";

// Import Page Components
import NeetPage from "./pages/NeetPage/NeetPage";
import UpscPage from './pages/UpscPage/UpscPage';
import GatePage from './pages/GatePage/GatePage';
import IITJEEPage from "./pages/IITJEEPage/IITJEEPage";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<IITJEEPage />} />
          <Route path="/neet" element={<NeetPage />} />
          <Route path="/upsc" element={<UpscPage />} />
          <Route path="/gate" element={<GatePage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;