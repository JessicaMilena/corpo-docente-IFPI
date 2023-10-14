import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './paginas/Home';
import Curso from './components/Curso';
import Professor from './components/Professor';
import Disciplinas from './components/Disciplinas';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/avaliar-curso" element={<Curso />} />
        <Route path="/avaliar-professor" element={<Professor />} />
        <Route path="/avaliar-disciplina" element={<Disciplinas />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
