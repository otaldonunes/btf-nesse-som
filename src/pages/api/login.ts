import bcryptjs from 'bcryptjs';
import { query as q } from 'faunadb';
import { fauna } from '@services/fauna';
import { NextApiRequest, NextApiResponse } from 'next';
import jwt from 'jsonwebtoken';

interface UserData {
  ts: number;
  data: {
    user: string;
    password: string;
  };
}

export default async function handlerLogin(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Método não permitido!' });
  }

  const { user, password } = req.body;

  if (!user || !password) {
    return res.status(400).json({ message: 'O campo usuário é obrigatório!' });
  }

  if (typeof user !== 'string') {
    return res
      .status(400)
      .json({ message: 'O campo usuário deve ser uma string!' });
  }

  if (typeof password !== 'string') {
    return res
      .status(400)
      .json({ message: 'O campo senha deve ser uma string!' });
  }

  try {
    const validUser: UserData = await fauna.query(
      q.Get(q.Match(q.Index('user_by_nickname'), user)),
    );

    if (!validUser) {
      return res.status(400).json({ message: 'Usuário ou Senha inválida!' });
    }

    const validPassword = await bcryptjs.compare(
      password,
      validUser.data.password,
    );

    if (validPassword === false) {
      return res.status(400).json({ message: 'Usuário ou Senha inválida!' });
    }

    const payload = {
      user: validUser.data.user,
      createdAt: validUser.ts,
    };

    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: '7d',
    });

    return res.status(200).json({ token });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: 'Internal server error' });
  }
}
