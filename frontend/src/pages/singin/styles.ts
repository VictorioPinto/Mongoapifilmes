import styled from "styled-components";

export const Main = styled.main`
  width: 100%;
  height: 70vh;
  padding: 2rem;
`;

export const FormsContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex; /* Para que os formulários fiquem lado a lado */
  justify-content: center; /* Centraliza os formulários no contêiner */
  align-items: flex-start; /* Alinha no topo */
  position: relative; /* Necessário para o posicionamento absoluto do Divtampa */
`;
