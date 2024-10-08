import React, { useEffect, useState } from "react";
import { IProduct } from "../../../models/Product";
import CardFilmes from "../Cardfilmes";
import { BtnMais, CardVazio, FilmeList, Titulolista } from "./style";
import { Titulo } from "../Cardfilmes/style";
import AddIcon from "../Icons/AddIcon";
import { Link } from "react-router-dom";

const API_KEY = "e36877275cfebad1307bd37590ff8d54";
const API_URL = `https://api.themoviedb.org/3/discover/movie?language=pt-BR&api_key=${API_KEY}&page=`;
const FilmesList: React.FC = () => {
  const [filmes, setFilmes] = useState<IProduct[]>([]);

  const fetchFilmes = async (page: number) => {
    try {
      const response = await fetch(`${API_URL}${page}`);
      const data = await response.json();
      const filmesData: IProduct[] = data.results.map((filme: any) => ({
        code: filme.id.toString(),
        name: filme.title,
        director: "Diretor não disponível",
        sinopse: "Sinopse não disponível",
        lancamento: new Date(filme.release_date),
        rating: [filme.vote_average],
        tags: filme.genre_ids.map((id: number) => id.toString()),
        image: `https://image.tmdb.org/t/p/w500${filme.poster_path}`,
      }));
      return filmesData;
    } catch (error) {
      console.error("Erro ao buscar filmes:", error);
      return [];
    }
  };

  useEffect(() => {
    const fetchAllFilmes = async () => {
      const filmesPages: IProduct[] = [];

      // Buscar filmes de múltiplas páginas (por exemplo, 2 páginas)
      for (let page = 1; page <= 5; page++) {
        const filmesData = await fetchFilmes(page);
        filmesPages.push(...filmesData);
      }

      setFilmes(filmesPages);
    };

    fetchAllFilmes();
  }, []);

  return (
    <div>
      <Titulolista>Lista de Filmes</Titulolista>
      <FilmeList>
        <CardVazio>
          <BtnMais >
            <Link to="/create/movie">
            <AddIcon></AddIcon>
            </Link>
          </BtnMais>
        </CardVazio>
        {filmes.map((filme) => (
          <CardFilmes
            key={filme.code}
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
