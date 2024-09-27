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
// Ajuste o caminho conforme necessário

interface CardFilmesProps
  extends Omit<IProduct, "rating" | "tags" | "lancamento"> {
  rating: number[]; // Avaliações
  tags: string[]; // Tags
  lancamento: Date; // Data de lançamento
}

const CardFilmes: React.FC<CardFilmesProps> = ({
  nome,
  diretor,
  sinopse,
  lancamento,
  rating,
  tags,
  image,
}) => {
  return (
    <CardFilme>
      <Titulo>{nome}</Titulo>
      <CardImg src={image} alt={nome} />
      <CardDiretor>Diretor: {diretor}</CardDiretor>
      <CardLancamento>
        Data de Lançamento: {lancamento.toLocaleDateString()}
      </CardLancamento>
      <CardAvaliacao>Avaliação: {rating.join(", ")}</CardAvaliacao>
      <CardTags>Tags: {tags.join(", ")}</CardTags>
    </CardFilme>
  );
};

export default CardFilmes;
