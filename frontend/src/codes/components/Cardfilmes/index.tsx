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
} from "./style";

interface CardFilmesProps
  extends Omit<IProduct, "rating" | "tags" | "lancamento"> {
  rating: number[];
  tags: string[];
  lancamento: Date;
}

const CardFilmes: React.FC<CardFilmesProps> = ({
  name,
  director,
  lancamento,
  rating,
  tags,
  image,
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
      <CardTags>Tags: {tags.join(", ")}</CardTags>
    </CardFilme>
  );
};

export default CardFilmes;
