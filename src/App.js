import './App.css';
import { Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import Navbar from './navbar/Navbar';
import Routers from './pages/routes/Routers';
function App() {
  const location = useLocation();
  const [navOpen, setNavOpen] = useState(false);

  return (
    <div className="App">
      <Navbar navOpen={navOpen} setNavOpen={setNavOpen}/>
      <AnimatePresence mode='wait'>
        <Routes location={location} key={location.pathname} >
          <Route path='/*' element={<Routers navOpen={navOpen} setNavOpen={setNavOpen} />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
