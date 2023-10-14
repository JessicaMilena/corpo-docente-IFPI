import React, { useState } from 'react';
import styled from 'styled-components';

const FormContainer = styled.div`
  max-width: 400px;
  margin: 0 auto;
`;
const Professor = () => {
  
  const [formData, setFormData] = useState({
    conhecimento: '',
    clareza: '',
    disponibilidade: '',
    comentarios: '',
  });

  const handleRespostaChange = (field, value) => {
    
    setFormData({
      ...formData,
      [field]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);
  };

  return (
    <FormContainer>
      <h2>Avaliação do professor</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>1. O professor demonstrou profundo conhecimento sobre o assunto?</label>
          <select
            value={formData.conhecimento}
            onChange={(e) => handleRespostaChange('conhecimento', e.target.value)}
            required
          >
            <option value="">Selecione</option>
            <option value="sim">Sim</option>
            <option value="nao">Não</option>
          </select>
        </div>

        <div>
          <label>2. O professor foi capaz de explicar de forma clara e compreensível?</label>
          <select
            value={formData.clareza}
            onChange={(e) => handleRespostaChange('clareza', e.target.value)}
            required
          >
            <option value="">Selecione</option>
            <option value="sim">Sim</option>
            <option value="nao">Não</option>
          </select>
        </div>

        <div>
          <label>3. O professor respondeu adequadamente às perguntas dos alunos?</label>
          <select
            value={formData.disponibilidade}
            onChange={(e) => handleRespostaChange('disponibilidade', e.target.value)}
            required
          >
            <option value="">Selecione</option>
            <option value="sim">Sim</option>
            <option value="nao">Não</option>
          </select>
        </div>

        <div>
          <label>Comentários adicionais:</label>
          <textarea
            value={formData.comentarios}
            onChange={(e) => handleRespostaChange('comentarios', e.target.value)}
          />
        </div>

        <button type="submit">Enviar Avaliação</button>
      </form>
    </FormContainer>
  );
};

export default Professor;
