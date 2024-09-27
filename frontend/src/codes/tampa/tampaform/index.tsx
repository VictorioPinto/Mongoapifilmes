import { useState } from "react";
import { Divtampa, Ptampa, Btntampa } from "./style"; // Importe corretamente
const [textobotao, settextobotao] = useState("Cadastrar")
export function seila() {
  const [count, setCount] = useState(0);
  if
}

export function Tampaform() {
  return (
    <Divtampa value={count}>
      <Ptampa>Cadastra aqui</Ptampa>
      <Btntampa onClick={seila}>{textobotao}</Btntampa>
    </Divtampa>
  );
}
