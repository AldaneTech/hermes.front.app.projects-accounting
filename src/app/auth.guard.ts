import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  
  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    
    const token = localStorage.getItem('token'); // O la forma en que estés guardando el token
    if (token) {
      return true; // El usuario está autenticado
    }

    // Si no está autenticado, redirigir al login
    this.router.navigate(['/login']);
    return false; // No permitir acceso a la ruta
  }
}
