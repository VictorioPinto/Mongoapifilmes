import styled from "styled-components";

export const Main = styled.main`
  width: 100vw;
  height: 70vh;
  padding: 2rem;
  display: flex;
  justify-content: center; /* Centraliza os formulários no contêiner */
  align-items: flex-start; /* Alinha no topo */
  border: 0;
`;

export const FormsContainer = styled.div`
  border: 0;
  width: 50%;
  height: 100%;
  display: flex; /* Para que os formulários fiquem lado a lado */
  justify-content: center; /* Centraliza os formulários no contêiner */
  align-items: flex-start; /* Alinha no topo */
  position: relative; /* Necessário para o posicionamento absoluto do Divtampa */
`;
