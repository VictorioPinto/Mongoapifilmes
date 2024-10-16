import { Router } from "express";
import { UserController } from "../Controllers/User.controller";

export const userRouter = Router();

const userController = new UserController();

userRouter.get("/users", userController.getUsers);
userRouter.get("/user/:id", userController.getUserById);
userRouter.post("/user/create", userController.createUser);
userRouter.post("/user/login", userController.loginUser);

userRouter.post(
  "/:userId/products/:productId",
  userController.addProductToUser
);

userRouter.delete(
  "/:userId/products/:productId",
  userController.removeProductFromUser
);

userRouter.get("/:userId/products", userController.getUserProducts);
