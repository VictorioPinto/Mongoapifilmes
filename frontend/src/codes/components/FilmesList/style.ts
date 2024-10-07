import styled from "styled-components";

export const FilmeList = styled.div`
  display: flex;
  flex-wrap: wrap; /* Permite a quebra de linha dos itens */
  justify-content: center; /* Centraliza os itens no container */
  gap: 1rem; /* Espaçamento entre os itens */
  padding: 1rem;
  background-color: var(--preto);
  border: 0;
`;
export const Titulolista = styled.h1`
  text-align: center;
  color: var(--azulrt);
  margin: 4vh 0 2vh;
`;
export const CardVazio = styled.div`
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
export const BtnMais = styled.button`
  height: 100%;
  background-color: var(--cinzaescuro);
`;
