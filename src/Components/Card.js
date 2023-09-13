import React from 'react';

const Card = ({ professor }) => {
  const openLattes = () => {
    window.open(professor.lattes, '_blank');
  };

  return (
    <div className="card">
      <img src={professor.foto} alt={professor.nome} />
      <h2>{professor.nome}</h2>
      <p>{professor.formacao}</p>
      <button onClick={openLattes}>Ver Currículo Lattes</button>
    </div>
  );
};

export default Card;
