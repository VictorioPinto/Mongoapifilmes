import { useState } from "react";
import { apiUrl } from "../../../url";
import { Form, Input, SubmitButton } from "./styles";
import { useDispatch } from "react-redux";
import { setUser } from "../../../redux/user/slice";
import { useNavigate } from "react-router-dom";

export const SignUpForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setsenha] = useState("");
  const [confirmsenha, setConfirmsenha] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const signUp = async (e: any) => {
    try {
      e.preventDefault();
      if (confirmsenha == senha) {
        const res = await fetch(`${apiUrl}/user/create`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: name,
            email: email,
            senha: senha,
          }),
        });

        const data = await res.json();

        alert(data.message);

        if (res.status == 201) {
          dispatch(
            setUser({
              user_id: data.user._id,
              user: name,
              email: email,
              senha: senha,
              filmes: data.user.filmes,
            })
          );

          navigate("/user");
        }
      } else {
        alert("Senhas não conferem");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Form onSubmit={signUp}>
        <h1>Cadastrar</h1>
        <label>Nome</label>
        <Input
          onChange={(e) => setName(e.target.value)}
          type="text"
          required
        ></Input>
        <label>Email</label>
        <Input
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          required
        ></Input>
        <label>Senha</label>
        <Input
          onChange={(e) => setsenha(e.target.value)}
          type="senha"
          required
        ></Input>
        <label>Confirmar Senha</label>
        <Input
          onChange={(e) => setConfirmsenha(e.target.value)}
          type="senha"
          required
        ></Input>
        <SubmitButton>Cadastrar</SubmitButton>
      </Form>
    </>
  );
};
