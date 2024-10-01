import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated: boolean = false;

  constructor() {
    this.checkToken();
  }

  checkToken() {
    const token = localStorage.getItem('token');
    if (token) {
      const decodedToken: any = jwt_decode(token);
      this.isAuthenticated = decodedToken.exp > Date.now() / 1000; // Verificar si no ha expirado
    }
  }

  isLoggedIn(): boolean {
    return this.isAuthenticated;
  }

  // Método para iniciar sesión y guardar el token
  login(token: string) {
    localStorage.setItem('token', token);
    this.checkToken();
  }

  // Método para cerrar sesión
  logout() {
    localStorage.removeItem('token');
    this.isAuthenticated = false;
  }
}
function jwt_decode(token: string): any {
  throw new Error('Function not implemented.');
}

