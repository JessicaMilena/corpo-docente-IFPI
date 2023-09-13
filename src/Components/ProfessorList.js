import React from 'react';
import Card from './Card';

const ProfessorList = ({ professores }) => {
  return (
    <div className="professor-list">
      {professores.map((professor) => (
        <Card key={professor.id} professor={professor} />
      ))}
    </div>
  );
};

export default ProfessorList;
