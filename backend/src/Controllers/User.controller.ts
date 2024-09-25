import { NextFunction, Request, Response } from "express";
import { UserRepository } from "../Repositories/user.repository";
import { IUser } from "../Interfaces/IUser";

const userRepository = new UserRepository();

export class UserController {
  // Retorna todos os usuários
  getUsers = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const users = await userRepository.getUsers();
      res.status(200).json(users);
    } catch (error) {
      next(error);
    }
  };

  // Retorna um usuário pelo ID
  getUserById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      const user = await userRepository.getUserById(id);

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

      // Verificação básica de dados de entrada
      if (!user.name || !user.email || !user.senha) {
        return res.status(400).json({ message: "Dados incompletos!" });
      }

      const insertedUser = await userRepository.insertUser(user);

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

      const user = await userRepository.loginUser(email, senha);

      if (!user) {
        return res.status(401).json({ message: "Credenciais inválidas!" });
      }

      res.status(200).json({ message: "Usuário logado com sucesso!", user });
    } catch (error) {
      next(error);
    }
  };
}
