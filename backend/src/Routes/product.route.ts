import { Router } from "express";
import { ProductController } from "../Controllers/product.controller";

export const productRouter = Router();

const productController = new ProductController();

productRouter.get("/getall", productController.getAllProducts);
productRouter.post("/createproduct", productController.createProduct);
productRouter.post("/rateproduct/:product_code", productController.rateProduct);
productRouter.put(
  "/updateproduct/:product_code",
  productController.updateproduct
);
productRouter.delete(
  "/deleteproduct/:product_code",
  productController.deleteProduct
);
