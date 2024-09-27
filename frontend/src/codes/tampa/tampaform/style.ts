import styled from "styled-components";
interface btnclick {
  value: number;
}

export const Divtampa = styled.div<btnclick>`
  width: 50%; /* Ajuste para cobrir metade da tela */
  height: 70vh; /* Altura do formulário */
  background-color: black;
  left: 0vh;
  transform: translate(${(props) => props.value}px);

  position: absolute;
  /* Use o offset passado */
  transition: top 0.3s ease;
`;

export const Ptampa = styled.p`
  font-size: 1rem;
`;

export const Btntampa = styled.button`
  height: 5vh;
  width: 5vw;
  background-color: white;
`;
