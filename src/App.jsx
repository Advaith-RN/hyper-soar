import { useState } from 'react'

import { BrowserRouter, Route, Routes} from 'react-router-dom';
import { Home, SeriesA, SeriesB, SeriesC } from './pages';


function App() {

  return (  
  <BrowserRouter>
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mian" element={<SeriesA />} />
        <Route path="/cyclops" element={<SeriesB />} />
        <Route path="/icarus" element={<SeriesC />} />
      </Routes>
    </main>
  </BrowserRouter>
);
}


export default App
