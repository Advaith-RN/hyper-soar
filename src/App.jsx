import { useState } from 'react'

import { useLocation, Route, Routes} from 'react-router-dom';
import { Home, SeriesA, SeriesB, SeriesC,Login } from './pages';
import { AnimatePresence } from 'framer-motion';


function App() {
  const location = useLocation();
  const [isLoggedIn, setIsLoggedIn] = useState(loginGet());

  function loginSet() {
    sessionStorage.setItem('login', true);
    setIsLoggedIn(true);
  }

  function loginGet() {
    let data = sessionStorage.getItem('login');
    return data;
  }

  return (  
  <>
    <AnimatePresence mode="wait">
    <main>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home isLoggedIn={isLoggedIn}/>} />
        <Route path="/login" element={<Login loginSet={loginSet}/>} />
        <Route path="/nike" element={<SeriesA />} />
        <Route path="/cyclops" element={<SeriesB />} />
        <Route path="/icarus" element={<SeriesC />} />
      </Routes>
    </main>
    </AnimatePresence>
  </>
);
}


export default App
