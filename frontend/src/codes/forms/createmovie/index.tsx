import { useState } from "react";
import { CardImg, CreateMovieDiv, Form, Input, SubmitButton } from "./style"

export const CreateMovie = () => {
    const [titulo, settitulo] = useState("");
    const [date, setdate] = useState("");
    const [imga, setImg] = useState("");
    const [imgUrl, setImgUrl] = useState("");
    const [sinopse, setSinopse] = useState("");
    const [rating, setRating] = useState("");
    const changeImage = (e: any) => {
        const file = e.target.files[0];
    
        if (file) {
          const reader = new FileReader();
          reader.onload = (e) => {
            if (typeof e.target?.result == "string") setImgUrl(e.target?.result);
          };
          reader.readAsDataURL(file);
        }
      };
    async function criar() {
        setdate(titulo)
    }
  
    return(
        <CreateMovieDiv>
        <Form onSubmit={criar}>
        <h1>Criar Filme</h1>

        <label>titulo</label>
        <Input
          onChange={(e) => settitulo(e.target.value)}
          type="text"
          required
        ></Input>
        <label>Data de lançamento</label>
        <Input
          onChange={(e) => setdate(e.target.value)}
          type="date"
          required
        ></Input>
        <Input
          onChange={(e) => setdate(e.target.value)}
          type="text"
          required
        ></Input>
        <Input
          onChange={(e) => changeImage(e)}
          type="file"
          required
        ></Input>
        <CardImg src={imgUrl}/>
        
       

        <SubmitButton>Criar</SubmitButton>
      </Form>
      </CreateMovieDiv>
    )
}