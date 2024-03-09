import { useState } from 'react';
import './App.css'; // Import your CSS file containing styles for dark and light modes
import Sidebar from './Components/Sidebar';
import DropDownProfile from './Components/Sidebar';
import {
  Route,
  Routes,
} from "react-router-dom";

import My_profile from "./routes/My-profile"
import Advanced_search from './routes/Advances-search';
import Metrices from './routes/metrices';
import My_library from './routes/My-library';
import Settings from './routes/settings';
import Alerts from './routes/Alerts';
import Home from './routes/Homepage';
import Login from './routes/Login';
import { FaMoon, FaSun } from 'react-icons/fa';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <>
      <div className={`App ${isDarkMode ? 'dark-mode' : ''}`}>
        <button onClick={toggleMode} className="mode-toggle">
          {isDarkMode ? <FaSun className="sun-icon" /> : <FaMoon className="moon-icon" />}
        </button>
        

        <div className="content">
          <DropDownProfile/>
          <Sidebar />
          <div className="routes">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/My_profile" element={<My_profile />} />
              <Route path="/Advanced_search" element={<Advanced_search />} />
              <Route path="/Metrices" element={<Metrices />} />
              <Route path="/My_library" element={<My_library />} />
              <Route path="/Settings" element={<Settings />} />
              <Route path="/Alerts" element={<Alerts />} />
              <Route path="/Home" element={<Home />} />
              <Route path="/Login" element={<Login />} />
            </Routes>
          </div>
        </div>
      </div>
    </>
  )
}

export default App;
