import { useEffect, useState } from "react";
import {
  AddTagButton,
  AddTags,
  CardImg,
  CreateMovieDiv,
  Form,
  Input,
  InputDate,
  InputRating,
  InputSinopse,
  Select,
  SubmitButton,
  Tags,
} from "./style";
import { Tag } from "../../components/Cardfilmes/style";
import { current } from "@reduxjs/toolkit";
import { apiUrl } from "../../../url";
const API_KEY = "e36877275cfebad1307bd37590ff8d54";
const API_URL_GENRES = `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=pt-BR`;
export const CreateMovie = () => {
  const [titulo, settitulo] = useState("");
  const [date, setdate] = useState("");
  const [imga, setImg] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [sinopse, setSinopse] = useState("");
  const [rating, setRating] = useState("");
  const [tag, setTag] = useState("");
  const [tags, setTags] = useState<any[]>([]);
  const [generos, setGeneros] = useState<{ id: number; name: string }[]>([]);
  const dispatch = useDispatch();
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
    const res = await fetch(`${apiUrl}/product/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: titulo,
        date: date,
        img: imgUrl,
        tags: tags,
        sinopse: sinopse,
      }),
    });
    const data = await res.json();
    if (res.status == 201) {
      dispatch(
        setProduct({
          product_id: data.product._id
          title: titulo,
         date: date,
         img: imgUrl,
         tags: tags,
         sinopse: sinopse,
        })
      );
    }
  }
  // try {
  //   alert(name + email + senha);
  //   e.preventDefault();
  //   if (confirmsenha == senha) {
  //     alert(apiUrl);
  //     const res = await fetch(`${apiUrl}/user/create`, {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         name: name,
  //         email: email,
  //         senha: senha,
  //       }),
  //     });
  //     console.log(res);

  //     const data = await res.json();

  //     alert(data.message);

  //     if (res.status == 201) {
  //       dispatch(
  //         setUser({
  //           user_id: data.user._id,
  //           user: name,
  //           email: email,
  //           senha: senha,
  //           filmes: [],
  //         })
  //       );

  //       navigate("/home");
  //     }
  //   } else {
  //     alert("Senhas não conferem");
  //   }
  // } catch (error) {
  //   alert(error);
  //   console.log(error);
  // }
  const fetchGeneros = async () => {
    try {
      const response = await fetch(API_URL_GENRES);
      const data = await response.json();
      setGeneros(data.genres);
    } catch (error) {
      console.error("Erro ao buscar gêneros:", error);
    }
  };
  function SaveTag(a: string) {
    if (a) {
      setTags((current: any) => [...current, a]);
      setTag(""); // Resetting the tag input
      document.getElementById("");
    }
  }

  useEffect(() => {
    fetchGeneros();
  }, []);

  return (
    <CreateMovieDiv>
      <Form onSubmit={criar}>
        <h1>Criar Filme</h1>

        <label>titulo</label>
        <Input
          onChange={(e) => settitulo(e.target.value)}
          type="text"
          required
        ></Input>
        <label>Sinopse do filme</label>
        <InputSinopse
          onChange={(e) => settitulo(e.target.value)}
          required
        ></InputSinopse>
        <label>Data de lançamento</label>
        <InputDate
          onChange={(e) => setdate(e.target.value)}
          type="date"
          required
        ></InputDate>
        <label>Avaliacão</label>
        <InputRating
          onChange={(e) => setRating(e.target.value)}
          type="number"
          required
        ></InputRating>
        <label>Tags</label>
        <Select value={tag} onChange={(e) => setTag(e.target.value)} required>
          <option value={""}></option>
          {generos.map((genero) => (
            <option key={genero.id} value={genero.name.toLowerCase()}>
              {genero.name}
            </option>
          ))}
        </Select>

        <Tags>
          {tags.map((t, index) => (
            <Tag key={index}>{t}</Tag>
          ))}
        </Tags>
        <AddTagButton type="button" onClick={() => SaveTag(tag)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path>
          </svg>
        </AddTagButton>
        <Input onChange={(e) => changeImage(e)} type="file" required></Input>
        <CardImg src={imgUrl} />

        <SubmitButton type="submit">Criar</SubmitButton>
      </Form>
    </CreateMovieDiv>
  );
};
