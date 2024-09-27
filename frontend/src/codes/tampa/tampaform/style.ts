import styled from "styled-components";
interface btnclick {
  value: number;
}

export const Divtampa = styled.div<btnclick>`
  width: 50%; /* Ajuste para cobrir metade da tela */
  height: 90%;
  background-color: var(--cinzaescuro);
  left: 0vh;
  display: flex;
  flex-direction: column;
  justify-content: center; /* Centraliza os formulários no contêiner */
  align-items: center; /* Alinha no topo */
  transform: translate(${(props) => props.value}dvw);
  border-radius: 1rem;

  position: absolute;
  /* Use o offset passado */
  transition: 2.5s ease;
`;

export const Ptampa = styled.p`
  font-size: 1rem;
  color: white;
`;

export const Btntampa = styled.button`
  height: 5vh;
  width: 5vw;
  background-color: var(--azulrt);
  border-radius: 1rem;
  border: none;
  outline: 0;
`;
