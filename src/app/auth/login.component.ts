// src/app/auth/auth.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly TOKEN_KEY = 'token';

  // Login "fake" solo para la prueba
  login(email: string, password: string): boolean {
    // puedes cambiar estas credenciales si quieres
    if (email === 'test@demo.com' && password === '123456') {
      localStorage.setItem(this.TOKEN_KEY, 'FAKE_TOKEN_123');
      return true;
    }
    return false;
  }

  logout(): void {
    localStorage.removeItem(this.TOKEN_KEY);
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem(this.TOKEN_KEY);
  }

  getToken(): string | null {
    return localStorage.getItem(this.TOKEN_KEY);
  }
}
