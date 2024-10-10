import { Router } from "express";
import { ProductController } from "../Controllers/product.controller";

export const productRouter = Router();

const productController = new ProductController();

// Route to get all products
productRouter.get("/getall", productController.getAllProducts);

// Route to get products by store ID
// productRouter.get(
//   "/product/store/:store_id",
//   productController.getProductsByStore
// );

// Route to create a new product in a specific store
productRouter.post(
  "/product/create",
  productController.createProduct
);

// Route to rate a specific product
productRouter.post("/product/rate/:code", productController.rateProduct);

// Route to update a specific product
productRouter.put("/product/update/:code", productController.updateProduct);

// Route to delete a specific product
productRouter.delete("/product/delete/:code", productController.deleteProduct);

// Route to delete all products
productRouter.delete("/delete/all", productController.deleteAll);
