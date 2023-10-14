import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  background-color: #0072ce; /* Cor IFPI */
  color: white;
  padding: 16px;
  text-align: center;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <h1>IFPI Avaliação</h1>
      <p>Avalie Professores, Disciplinas e Cursos</p>
    </HeaderContainer>
  );
};

export default Header;
