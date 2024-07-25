import { describe, expect, it } from '@jest/globals';
import AuthService from '../../services/authService.js';

const authService = new AuthService();

describe('Testando a authService.cadastrarUsuario', () => {
  it('O usuário deve possuir um nome, email e senha', async () => {
    // arrage
    const usuarioMock = {
      nome: 'Rafael',
      email: 'rafael@teste.pt',
    };

    // act
    const usuarioSalvo = authService.cadastrarUsuario(usuarioMock);

    // assert
    await expect(usuarioSalvo).rejects.toThrowError('A senha de usuário é obrigatória!');
  });
});
