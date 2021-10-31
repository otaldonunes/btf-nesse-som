import jwt from 'jsonwebtoken';

export function validateToken(token: string): boolean {
  if (!token) {
    throw new Error('Unauthorized');
  }
  try {
    jwt.verify(token, process.env.JWT_SECRET);
    return true;
  } catch (err) {
    throw new Error('Unauthorized');
  }
}
