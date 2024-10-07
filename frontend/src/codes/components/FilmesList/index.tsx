import React, { useEffect, useState } from "react";
import { IProduct } from "../../../models/Product";
import CardFilmes from "../Cardfilmes";
import { BtnMais, CardVazio, FilmeList, Titulolista } from "./style";
import { Titulo } from "../Cardfilmes/style";

const API_KEY = "e36877275cfebad1307bd37590ff8d54   "; // Coloque sua chave API aqui
const API_URL = `https://api.themoviedb.org/3/discover/movie?language=pt-BR&api_key=${API_KEY}`;

const FilmesList: React.FC = () => {
  const [filmes, setFilmes] = useState<IProduct[]>([]);

  useEffect(() => {
    const fetchFilmes = async () => {
      try {
        const response = await fetch(API_URL);
        const data = await response.json();
        const filmesData: IProduct[] = data.results
          .slice(0, 20)
          .map((filme: any) => ({
            code: filme.id.toString(),
            name: filme.title,
            director: "Diretor não disponível", // Placeholder
            sinopse: "Sinopse não disponível", // Placeholder
            lancamento: new Date(filme.release_date),
            rating: [filme.vote_average], // Usando o voto médio como um array
            tags: filme.genre_ids.map((id: number) => id.toString()), // Pode mapear para nomes de gêneros
            image: `https://image.tmdb.org/t/p/w500${filme.poster_path}`, // URL da imagem do filme
          }));
        setFilmes(filmesData);
      } catch (error) {
        console.error("Erro ao buscar filmes:", error);
      }
    };

    fetchFilmes();
  }, []);

  return (
    <div>
      <Titulolista>Lista de Filmes</Titulolista>
      <FilmeList>
        <CardVazio>
          <BtnMais></BtnMais>
        </CardVazio>
        {filmes.map((filme) => (
          <CardFilmes
            code={filme.code}
            name={filme.name}
            director={filme.director}
            sinopse={filme.sinopse}
            lancamento={filme.lancamento}
            rating={filme.rating}
            tags={filme.tags}
            image={filme.image}
          />
        ))}
      </FilmeList>
    </div>
  );
};

export default FilmesList;
