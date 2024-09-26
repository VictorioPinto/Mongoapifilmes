import { IProduct } from "../Interfaces/IProduct";
import { ProductRepository } from "../Repositories/product.repository";
import { NextFunction, Request, Response } from "express";

const productRepository = new ProductRepository();

export class ProductController {
  getAllProducts = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const products = await productRepository.getAllProducts();
      res.status(200).json(products);
    } catch (error) {
      next(error);
    }
  };

  createProduct = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const product: IProduct = req.body;
      const insertedProduct = await productRepository.createProduct(product);
      res.status(201).json(insertedProduct);
    } catch (error) {
      next(error);
    }
  };

  updateProduct = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const props: Partial<IProduct> = req.body;
      const { code } = req.params;

      const updatedProduct = await productRepository.updateProduct(props, code);
      res.status(200).json({
        message: `Produto: ${updatedProduct.name} - ${updatedProduct.code} foi atualizado!`,
      });
    } catch (error) {
      next(error);
    }
  };

  deleteProduct = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { code } = req.params;
      const deletedProduct = await productRepository.deleteProduct(code);
      res.status(200).json({
        message: `Produto: ${deletedProduct.name} - ${deletedProduct.code} deletado!`,
      });
    } catch (error) {
      next(error);
    }
  };

  rateProduct = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { code } = req.params;
      const { rating } = req.body;

      const updatedProduct = await productRepository.rateProduct(code, rating);
      res
        .status(200)
        .json({ message: `Nota ${updatedProduct.rating} adicionada!` });
    } catch (error) {
      next(error);
    }
  };

  // getProductsByStore = async (
  //   req: Request,
  //   res: Response,
  //   next: NextFunction
  // ) => {
  //   try {
  //     const { store_id } = req.params; // Get store ID from parameters
  //     const products = await productRepository.getProductsByStore(store_id);
  //     res.status(200).json(products);
  //   } catch (error) {
  //     next(error);
  //   }
  // };

  deleteAll = async (req: Request, res: Response, next: NextFunction) => {
    try {
      await productRepository.deleteAll();
      res.status(204).send(); // No content
    } catch (error) {
      next(error);
    }
  };
}
