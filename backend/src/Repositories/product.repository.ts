import { BadRequestError } from "../Errors/BadRequest.error";
import { IProduct } from "../Interfaces/IProduct";
import { Product } from "../Models/Product";

export class ProductRepository {
  // Obter todos os produtos
  getAllProducts = async (): Promise<IProduct[]> => {
    const products = await Product.find();
    return products;
  };

  // Obter produtos por store_id
  getProductsByStoreId = async (store_id: string): Promise<IProduct[]> => {
    return await Product.find({ store: store_id });
  };

  // Criar um novo produto
  createProduct = async (
    product: Partial<IProduct>,
    store_id: string
  ): Promise<IProduct> => {
    const newProduct = new Product({
      code: product.code,
      name: product.name,
      director: product.director,
      sinopse: product.sinopse,
      lancamento: product.lancamento,
      rating: [],
      tags: product.tags,
      store: store_id,
      image: product.image,
    });

    return await newProduct.save();
  };

  // Atualizar um produto existente
  updateProduct = async (product: Partial<IProduct>, product_code: string) => {
    if (!product_code) throw new BadRequestError("Código é necessário!");

    const updatedProduct = await Product.findOneAndUpdate(
      {
        code: product_code,
      },
      {
        name: product.name,
        director: product.director,
        sinopse: product.sinopse,
        lancamento: product.lancamento,
        image: product.image,
        tags: product.tags,
      },
      {
        new: true,
        runValidators: true,
      }
    );

    if (!updatedProduct) throw new BadRequestError("Produto não encontrado!");

    return updatedProduct;
  };

  // Avaliar um produto
  rateProduct = async (product_code: string, rate: number) => {
    const product = await Product.findOne({ code: product_code });

    if (!product) throw new BadRequestError("Produto não encontrado!");

    product.rating.push(rate);

    const updatedProduct = await product.save();
    return updatedProduct;
  };

  // Deletar um produto
  deleteProduct = async (product_code: string) => {
    if (!product_code) throw new BadRequestError("Código é necessário!");

    const deletedProduct = await Product.findOneAndDelete(
      { code: product_code },
      { runValidators: true }
    );

    if (!deletedProduct) throw new BadRequestError("Produto não encontrado!");

    return deletedProduct;
  };

  // Deletar todos os produtos
  deleteAll = async () => {
    return await Product.deleteMany().exec();
  };
}
