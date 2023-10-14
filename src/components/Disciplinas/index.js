import React, { useState } from 'react';
import styled from 'styled-components';

const FormContainer = styled.div`
  max-width: 700px;
  margin: 0 auto;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;
const Disciplinas = () => {
  const [formData, setFormData] = useState({
    avaliacao: '1',
    comentarios: '',
    dataAvaliacao: '',
    recomendacao: 'sim',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para enviar os dados do formulário para o servidor
    console.log(formData); // Exemplo: exibir os dados no console
  };

  return (
    <FormContainer>
      <h2>Avaliação de Curso</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="avaliacao">Avaliação:</label>
        <div>
          {[1, 2, 3, 4, 5].map((value) => (
            <React.Fragment key={value}>
              <input
                type="radio"
                id={`avaliacao${value}`}
                name="avaliacao"
                value={value.toString()}
                checked={formData.avaliacao === value.toString()}
                onChange={handleChange}
                required
              />
              <label htmlFor={`avaliacao${value}`}>{value}</label>
            </React.Fragment>
          ))}
        </div>

        <label htmlFor="comentarios">Comentários:</label>
        <textarea
          id="comentarios"
          name="comentarios"
          rows="4"
          value={formData.comentarios}
          onChange={handleChange}
        ></textarea>

        <label htmlFor="dataAvaliacao">Data da Avaliação:</label>
        <input
          type="date"
          id="dataAvaliacao"
          name="dataAvaliacao"
          value={formData.dataAvaliacao}
          onChange={handleChange}
        />

        <label>Recomenda o curso?</label>
        <div>
          <input
            type="radio"
            id="recomendacaoSim"
            name="recomendacao"
            value="sim"
            checked={formData.recomendacao === 'sim'}
            onChange={handleChange}
            required
          />
          <label htmlFor="recomendacaoSim">Sim</label>

          <input
            type="radio"
            id="recomendacaoNao"
            name="recomendacao"
            value="nao"
            checked={formData.recomendacao === 'nao'}
            onChange={handleChange}
          />
          <label htmlFor="recomendacaoNao">Não</label>
        </div>

        <button type="submit">Enviar Avaliação</button>
      </form>
    </FormContainer>
  );
};

export default Disciplinas;
