import { useState } from 'react'

import { useLocation, Route, Routes} from 'react-router-dom';
import { Home, SeriesA, SeriesB, SeriesC } from './pages';
import { AnimatePresence } from 'framer-motion';


function App() {
  const location = useLocation();

  return (  
  <>
    <AnimatePresence mode="wait">
    <main>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
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
