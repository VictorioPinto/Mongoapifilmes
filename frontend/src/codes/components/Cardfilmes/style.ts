import styled from "styled-components";

export const Titulo = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  height: 10dvh;
  text-align: center;
  display: flex;
  align-items: center;
`;

export const CardFilme = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--cinza);
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  margin: 1rem;
  max-width: 300px;
  text-align: center;
`;

export const CardDiretor = styled.p`
  font-size: 1rem;
  margin: 0.5rem 0;
  font-weight: 500;
`;

export const CardLancamento = styled.p`
  font-size: 1rem;
  margin: 0.5rem 0;
  color: var(--cinzaletra);
`;

export const CardAvaliacao = styled.p`
  font-size: 1rem;
  margin: 0.5rem 0;
  color: var(--azulrt);
  font-weight: bold;
`;

export const CardImg = styled.img`
  max-height: 40dvh;
  min-height: 40dvh;
  max-width: 15vw;
`;
export const CardTags = styled.div`
  // Estilos para a seção de tags
  display: flex;
  flex-wrap: wrap;
  gap: 5px; // Espaçamento entre as tags
  font-size: 0.9rem;
  margin: 0.5rem 0;
  align-items: center;
  justify-content: center;
  color: var(--cinzaletra);
  font-style: italic;
  border: 0;
`;

export const Tag = styled.span`
  background-color: var(--azulrt);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  padding: 5px 10px;
  font-size: 0.9em;
`;
