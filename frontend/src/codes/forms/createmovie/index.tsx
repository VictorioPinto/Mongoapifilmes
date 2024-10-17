import { useEffect, useState } from "react";
import { useDispatch } from "react-redux"; // Adicionada a importação
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
import { apiUrl } from "../../../url";
import { setProduct } from "../../../redux/Product/slice";

const API_KEY = "e36877275cfebad1307bd37590ff8d54";
const API_URL_GENRES = `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=pt-BR`;

export const CreateMovie = () => {
  const [titulo, settitulo] = useState("");
  const [date, setdate] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [sinopse, setSinopse] = useState("");
  const [rating, setRating] = useState("");
  const [tag, setTag] = useState("");
  const [tags, setTags] = useState<string[]>([]);
  const [generos, setGeneros] = useState<{ id: number; name: string }[]>([]);
  const dispatch = useDispatch();

  const changeImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        if (typeof e.target?.result === "string") setImgUrl(e.target?.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const criar = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault(); // Impede o envio padrão do formulário
  
  const res = await fetch(`${apiUrl}/product/create`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title: titulo,
      lancamento: date,
      image: imgUrl,
      tags: tags,
      sinopse: sinopse,
    }),
  });
  
  const data = await res.json();

  if (res.ok) { // Verifica se a resposta foi bem-sucedida
    dispatch(
      setProduct({
        product_id: data.product._id, // Certifique-se que `data.product` existe
        title: titulo,
        lancamento: date,
        image: imgUrl,
        tags: tags,
        sinopse: sinopse,
      })
    );
  } else {
    console.error("Erro ao criar produto:", data); // Log do erro
    alert(`Erro: ${data.message || "Não foi possível criar o filme."}`);
  }
};


  const fetchGeneros = async () => {
    try {
      const response = await fetch(API_URL_GENRES);
      const data = await response.json();
      setGeneros(data.genres);
    } catch (error) {
      console.error("Erro ao buscar gêneros:", error);
    }
  };

  const SaveTag = (a: string) => {
    if (a) {
      setTags((current) => [...current, a]);
      setTag(""); // Resetando a entrada da tag
    }
  };

  useEffect(() => {
    fetchGeneros();
  }, []);

  return (
    <CreateMovieDiv>
      <Form onSubmit={criar}>
        <h1>Criar Filme</h1>

        <label>Título</label>
        <Input
          onChange={(e) => settitulo(e.target.value)}
          type="text"
          required
        />
        <label>Sinopse do filme</label>
        <InputSinopse
          onChange={(e) => setSinopse(e.target.value)} // Corrigido para setSinopse
          required
        />
        <label>Data de lançamento</label>
        <InputDate
          onChange={(e) => setdate(e.target.value)}
          type="date"
          required
        />
        <label>Avaliação</label>
        <InputRating
          onChange={(e) => setRating(e.target.value)}
          type="number"
          required
        />
        <label>Tags</label>
        <Select value={tag} onChange={(e) => setTag(e.target.value)}>
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
        <Input onChange={(e) => changeImage(e)} type="file" required />
        <CardImg src={imgUrl} />

        <SubmitButton type="submit">Criar</SubmitButton>
      </Form>
    </CreateMovieDiv>
  );
};
