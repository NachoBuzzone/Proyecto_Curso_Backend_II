import * as userRepository from '../repositories/users.repository.js';
import { createHash } from '../utils/hash.js';

export class SessionsService {
  async registerUser(userData) {
    const { first_name, last_name, email, password } = userData;
    const normalizedEmail = email.trim().toLowerCase();

    const existingUser = await userRepository.findByEmail(normalizedEmail);
    if (existingUser) {
      const error = new Error('El email ya está registrado');
      error.statusCode = 409;
      throw error;
    }

    const hashedPassword = await createHash(password);

    const newUser = await userRepository.create({
      first_name,
      last_name,
      email: normalizedEmail,
      password: hashedPassword,
      role: 'user'
    });

    const userResponse = newUser.toObject ? newUser.toObject() : { ...newUser };
    delete userResponse.password;

    return userResponse;
  }
}

export const sessionsService = new SessionsService();
