import { Request, Response, NextFunction } from "express";
import { UserRepository } from "../Repositories/user.repository";
import { IUser } from "../Interfaces/IUser";
import { IProduct } from "../Interfaces/IProduct";
import { BadRequestError } from "../Errors/BadRequest.error";

export class UserController {
  private userRepository: UserRepository; // Declare a propriedade aqui

  constructor() {
    this.userRepository = new UserRepository(); // Inicialize a propriedade no construtor
  }

  // Adiciona produto ao usuário
  addProductToUser = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const { userId, productId } = req.params;
    try {
      const user = await this.userRepository.addProductToUser(
        userId,
        productId
      );
      res.status(200).json(user);
    } catch (error) {
      if (error instanceof Error) {
        res.status(400).json({ error: error.message });
      } else {
        res.status(500).json({ error: "Erro desconhecido!" });
      }
    }
  };

  // Remove produto do usuário
  removeProductFromUser = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const { userId, productId } = req.params;
    try {
      const user = await this.userRepository.removeProductFromUser(
        userId,
        productId
      );
      res.status(200).json(user);
    } catch (error) {
      if (error instanceof Error) {
        res.status(400).json({ error: error.message });
      } else {
        res.status(500).json({ error: "Erro desconhecido!" });
      }
    }
  };

  // Obtém produtos do usuário
  getUserProducts = async (req: Request, res: Response, next: NextFunction) => {
    const { userId } = req.params;
    try {
      const products = await this.userRepository.getUserProducts(userId);
      res.status(200).json(products);
    } catch (error) {
      if (error instanceof Error) {
        res.status(400).json({ error: error.message });
      } else {
        res.status(500).json({ error: "Erro desconhecido!" });
      }
    }
  };

  // Retorna todos os usuários
  getUsers = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const users = await this.userRepository.getUsers();
      res.status(200).json(users);
    } catch (error) {
      next(error);
    }
  };

  // Retorna um usuário pelo ID
  getUserById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      const user = await this.userRepository.getUserById(id);

      if (!user) {
        return res.status(404).json({ message: "Usuário não encontrado!" });
      }

      res.status(200).json(user);
    } catch (error) {
      next(error);
    }
  };

  // Cria um novo usuário
  createUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const user: IUser = req.body;

      if (!user.name || !user.email || !user.senha) {
        return res.status(400).json({ message: "Dados incompletos!" });
      }

      const insertedUser = await this.userRepository.insertUser(user);

      res.status(201).json({
        message: `Usuário ${insertedUser.name} cadastrado com sucesso!`,
        user: insertedUser,
      });
    } catch (error) {
      next(error);
    }
  };

  // Login de usuário
  loginUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { email, senha } = req.body;

      if (!email || !senha) {
        return res
          .status(400)
          .json({ message: "Email e senha são obrigatórios!" });
      }

      const user = await this.userRepository.loginUser(email, senha);

      if (!user) {
        return res.status(401).json({ message: "Credenciais inválidas!" });
      }

      res.status(200).json({ message: "Usuário logado com sucesso!", user });
    } catch (error) {
      next(error);
    }
  };
}
