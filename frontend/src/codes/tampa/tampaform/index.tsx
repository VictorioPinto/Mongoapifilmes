import { useState } from "react";
import { Divtampa, Ptampa, Btntampa } from "./style"; // Certifique-se de que os estilos estão corretamente importados

export function Tampaform() {
  // Mova os hooks para dentro do componente Tampaform
  const [textobotao, settextobotao] = useState("Cadastrar");
  const [count, setCount] = useState(0);
  const [textotampa, settextotampa] = useState("Cadastro aqui!");

  // Função que altera o texto do botão e o valor de count
  function seila() {
    if (textobotao === "Cadastrar") {
      settextobotao("Login");
    } else {
      settextobotao("Cadastrar");
    }
    if (count === 0) {
      setCount(24.1);
    } else {
      setCount(0);
    }
    if (textotampa === "Cadastro aqui!") {
      settextotampa("Login aqui!");
    } else {
      settextotampa("Cadastro aqui!");
    }
  }

  return (
    <Divtampa value={count}>
      <Ptampa>{textotampa}</Ptampa>
      <Btntampa onClick={seila}>{textobotao}</Btntampa>
    </Divtampa>
  );
}
