import React, { useState, useEffect } from 'react';
import './App.css';
import ProfessorList from './Components/ProfessorList';

function App() {
  const [professores, setProfessores] = useState([]);

  useEffect(() => {
    fetch('/data.json')
      .then((response) => response.json())
      .then((data) => setProfessores(data.professores))
      .catch((error) => console.error('Erro ao carregar os dados:', error));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Corpo Docente</h1>
        <img src={process.env.PUBLIC_URL + '/logo.png'} alt="IFPI Logo" className="ifpi-logo" />
      </header>
      <main>
        <ProfessorList professores={professores} />
      </main>
    </div>
  );
}

export default App;
