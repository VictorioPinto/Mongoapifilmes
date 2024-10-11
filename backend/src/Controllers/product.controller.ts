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
      const { id } = req.params; // Supondo que o ID do produto é passado como parâmetro

      const updatedProduct = await productRepository.updateProduct(props, id);
      if (updatedProduct) {
        res.status(200).json({
          message: `Produto: ${updatedProduct.title} foi atualizado!`,
          product: updatedProduct,
        });
      } else {
        res.status(404).json({ message: "Produto não encontrado." });
      }
    } catch (error) {
      next(error);
    }
  };

  deleteProduct = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params; // Supondo que o ID do produto é passado como parâmetro
      const deletedProduct = await productRepository.deleteProduct(id);
      if (deletedProduct) {
        res.status(200).json({
          message: `Produto: ${deletedProduct.title} deletado!`,
        });
      } else {
        res.status(404).json({ message: "Produto não encontrado." });
      }
    } catch (error) {
      next(error);
    }
  };

  rateProduct = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params; // Supondo que o ID do produto é passado como parâmetro
      const { rating } = req.body;

      const updatedProduct = await productRepository.rateProduct(id, rating);
      if (updatedProduct) {
        res.status(200).json({
          message: `Nota ${updatedProduct.rating} adicionada!`,
          product: updatedProduct,
        });
      } else {
        res.status(404).json({ message: "Produto não encontrado." });
      }
    } catch (error) {
      next(error);
    }
  };

  deleteAll = async (req: Request, res: Response, next: NextFunction) => {
    try {
      await productRepository.deleteAll();
      res.status(204).send(); // No content
    } catch (error) {
      next(error);
    }
  };
}
