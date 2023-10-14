import React from 'react';
import styled from 'styled-components';

const FormContainer = styled.div`
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Curso = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para enviar os dados do formulário para o servidor
  };

  return (
    <FormContainer>
      <h2>Avaliação de Curso</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Qual foi a sua experiência geral com o curso?</label>
          <div>
            <label htmlFor="experiencia">Experiência Geral:</label>
            <select id="experiencia" name="experiencia">
              <option value="excelente">Excelente</option>
              <option value="muito-boa">Muito Boa</option>
              <option value="boa">Boa</option>
              <option value="razoavel">Razoável</option>
              <option value="insatisfatoria">Insatisfatória</option>
            </select>
          </div>
        </div>

        <div>
          <label>Qual foi o ponto forte do curso?</label>
          <div>
            <label htmlFor="pontoForte">Ponto Forte:</label>
            <textarea id="pontoForte" name="pontoForte" rows="4"></textarea>
          </div>
        </div>
        <div>
          <label>Quais áreas você acha que precisam de melhoria?</label>
          <div>
            <label htmlFor="melhorias">Áreas de Melhoria:</label>
            <textarea id="melhorias" name="melhorias" rows="4"></textarea>
          </div>
        </div>

        <div>
          <label>Você teve alguma dificuldade específica durante o curso?</label>
          <div>
            <label htmlFor="dificuldades">Dificuldades:</label>
            <textarea id="dificuldades" name="dificuldades" rows="4"></textarea>
          </div>
        </div>

        <div>
          <label>Você gostaria de deixar algum comentário adicional?</label>
          <div>
            <label htmlFor="comentariosAdicionais">Comentários Adicionais:</label>
            <textarea id="comentariosAdicionais" name="comentariosAdicionais" rows="4"></textarea>
          </div>
        </div>
        <button type="submit">Enviar Avaliação</button>
      </form>
    </FormContainer>
  );
};

export default Curso;
