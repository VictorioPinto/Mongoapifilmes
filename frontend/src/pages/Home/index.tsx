import { useEffect, useState } from "react";
import { apiUrl } from "../../url";
import { Main, ProductContainer } from "./styles";
import { IProduct } from "../../models/Product";

export const Home = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [productsFiltred, setProductsFiltred] = useState<IProduct[]>([]);

  const getAllProducts = async () => {
    const res = await fetch(`${apiUrl}/getall`);

    const data = await res.json();

    setProducts(data);
    setProductsFiltred(data);
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <>
      <Main>
        <h1>seila</h1>
      </Main>
    </>
  );
};
