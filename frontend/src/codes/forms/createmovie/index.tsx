import { useEffect, useState } from "react";
import {
  AddTagButton,
  CardImg,
  CreateMovieDiv,
  Form,
  Input,
  Select,
  SubmitButton,
} from "./style";
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
  const [generos, setGeneros] = useState<{ id: number; name: string }[]>([]);
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
    setdate(titulo);
  }
  const fetchGeneros = async () => {
    try {
      const response = await fetch(API_URL_GENRES);
      const data = await response.json();
      setGeneros(data.genres);
    } catch (error) {
      console.error("Erro ao buscar gêneros:", error);
    }
  };

  useEffect(() => {
    fetchGeneros();
  }, []);

  return (
    <CreateMovieDiv>
      <Form>
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
        <label>Tags</label>
        <Select onChange={(e) => setTag(e.target.value)} required>
          {generos.map((genero) => (
            <option key={genero.id} value={genero.name.toLowerCase()}>
              {genero.name}
            </option>
          ))}
        </Select>
        <AddTags>
          
        </AddTags>
        <AddTagButton>
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

        <SubmitButton onClick={criar}>Criar</SubmitButton>
      </Form>
    </CreateMovieDiv>
  );
};
