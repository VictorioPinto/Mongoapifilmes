// CardFilmes.tsx
import React from "react";
import { IProduct } from "../../../models/Product";
import {
  CardAvaliacao,
  CardDiretor,
  CardFilme,
  CardImg,
  CardLancamento,
  CardTags,
  Titulo,
  Tag,
} from "./style";

interface CardFilmesProps
  extends Omit<IProduct, "rating" | "tags" | "lancamento"> {
  rating: number[];
  tags: string[];
  lancamento: Date;
  generos: { [key: number]: string }; // Adicione esta linha
}

const CardFilmes: React.FC<CardFilmesProps> = ({
  name,
  director,
  lancamento,
  rating,
  tags,
  image,
  generos, // Adicione esta linha
}) => {
  return (
    <CardFilme>
      <Titulo>{name}</Titulo>
      <CardImg src={image} alt={name} />
      <CardDiretor>Diretor: {director}</CardDiretor>
      <CardLancamento>
        Data de Lançamento: {lancamento.toLocaleDateString()}
      </CardLancamento>
      <CardAvaliacao>Avaliação: {rating.join(", ")}</CardAvaliacao>
      <CardTags>
        Tags:{" "}
        {tags.map((tagId) => (
          <Tag key={tagId}>{generos[parseInt(tagId)]}</Tag>
        ))}
      </CardTags>
    </CardFilme>
  );
};

export default CardFilmes;
