import styled from "styled-components";

export const Form = styled.form`
  width: 50%;
  height: 90%;
  border-right: solid black 1px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-inline: 1.8rem;
  background: var(--cinza);
  border-radius: 1rem;
  gap: 1rem;
`;

export const Input = styled.input`
  width: 100%;
  outline: none;
  padding: 0.4rem;
  background: var(--cinzaclaro);
  border-radius: 1rem;
`;

export const SubmitButton = styled.button`
  width: 100%;
  padding: 0.4rem;
  background: var(--azulrt);
  border-radius: 1rem;
  color: white;
  border: none;

  &:hover {
    cursor: pointer;
  }
`;  
export const CreateMovieDiv = styled.div`
margin-top:10%;
height:100%;
border:0;
display:flex;
justify-content:center;
align-items:center;
`
export const CardImg = styled.img`
  max-height: 40dvh;
  min-height:40dvh;
  max-width:15vw;
`;