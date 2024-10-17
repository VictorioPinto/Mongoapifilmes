import { BadRequestError } from "../Errors/BadRequest.error";
import { IProduct } from "../Interfaces/IProduct";
import { Product } from "../Models/Product";

export class ProductRepository {
  // Get all products
  getAllProducts = async (): Promise<IProduct[]> => {
    return await Product.find();
  };

  // Create a new product

  createProduct = async (product: Partial<IProduct>): Promise<IProduct> => {
    try {
      const newProduct = new Product({
        title: product.title,
        sinopse: product.sinopse,
        lancamento: product.lancamento,
        rating: product.rating || 0,
        tags: product.tags,
        image: product.image,
      });

      return await newProduct.save();
    } catch (error: unknown) {
      if (error instanceof Error) {
        throw new BadRequestError(`Erro ao criar produto: ${error.message}`);
      } else {
        throw new BadRequestError("Erro desconhecido ao criar produto.");
      }
    }
  };

  // Update an existing product
  updateProduct = async (
    product: Partial<IProduct>,
    productId: string
  ): Promise<IProduct> => {
    if (!productId) throw new BadRequestError("ID é necessário!");

    const updatedProduct = await Product.findByIdAndUpdate(
      productId,
      {
        ...product,
      },
      {
        new: true,
        runValidators: true,
      }
    );

    if (!updatedProduct) throw new BadRequestError("Produto não encontrado!");

    return updatedProduct;
  };

  // Rate a product
  rateProduct = async (productId: string, rate: number): Promise<IProduct> => {
    const product = await Product.findById(productId);

    if (!product) throw new BadRequestError("Produto não encontrado!");

    product.rating = rate;

    return await product.save();
  };

  // Delete a product
  deleteProduct = async (productId: string): Promise<IProduct> => {
    if (!productId) throw new BadRequestError("ID é necessário!");

    const deletedProduct = await Product.findByIdAndDelete(productId);

    if (!deletedProduct) throw new BadRequestError("Produto não encontrado!");

    return deletedProduct;
  };

  // Delete all products
  deleteAll = async (): Promise<void> => {
    await Product.deleteMany().exec();
  };
}
