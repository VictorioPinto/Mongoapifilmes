import { Router } from "express";
import { ProductController } from "../Controllers/product.controller";

export const productRouter = Router();

const productController = new ProductController();

// Route to get all products
productRouter.get("/", productController.getAllProducts);

// Route to create a new product
productRouter.post("/product/create", productController.createProduct);

// Route to rate a product by its ID
productRouter.post("/rate/:id", productController.rateProduct);

// Route to update a product by its ID
productRouter.put("/:id", productController.updateProduct);

// Route to delete a product by its ID
productRouter.delete("/:id", productController.deleteProduct);

// Route to delete all products
productRouter.delete("/", productController.deleteAll);
