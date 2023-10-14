import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const backgroundImage = process.env.PUBLIC_URL + '/ifpi.png';

  return (
    <div style={styles.homeContainer}>
      <img src={backgroundImage} alt="Background" style={styles.backgroundImage} />
      <div style={styles.contentContainer}>
        <h2>Escolha o que deseja avaliar:</h2>
        <ul style={styles.evaluationOptions}>
          <li style={styles.optionItem}>
            <Link to="/avaliar-curso" style={styles.link}>Avaliar Curso</Link>
          </li>
          <li style={styles.optionItem}>
            <Link to="/avaliar-professor" style={styles.link}>Avaliar Professor</Link>
          </li>
          <li style={styles.optionItem}>
            <Link to="/avaliar-disciplina" style={styles.link}>Avaliar Disciplina</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

const styles = {
  homeContainer: {
    position: 'relative',
    textAlign: 'center',
    margin: '50px',
  },
  backgroundImage: {
    width: '100%',
    height: 'auto',
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: -1,
    opacity: 0.7, // Ajuste conforme necessário
  },
  contentContainer: {
    position: 'relative',
    zIndex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.8)', // Ajuste conforme necessário
    padding: '20px',
    borderRadius: '10px',
  },
  evaluationOptions: {
    listStyleType: 'none',
    padding: 0,
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '20px',
  },
  optionItem: {
    backgroundColor: '#3498db',
    padding: '15px',
    borderRadius: '5px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    transition: 'background-color 0.3s ease',
  },
  link: {
    textDecoration: 'none',
    color: '#fff',
    fontWeight: 'bold',
  },
};

export default Home;
