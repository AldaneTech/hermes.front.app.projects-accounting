import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import axios from 'axios';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  
  username: string = '';
  password: string = '';
  @ViewChild('container') container!: ElementRef;

  constructor(private router: Router) {}

  ngOnInit(): void {
    const token = localStorage.getItem('token');
    // Si ya está autenticado, redirigir a Home
    if (token) {
      this.router.navigate(['/']); // Redirigir a la página de inicio
    }
    document.body.style.backgroundColor = '#d4d4d4';

  }

  onSubmit() {
    const credentials = { username: this.username, password: this.password };

    axios.post('http://localhost:8090/accounting/login', credentials)
      .then(response => {
        console.log('Token:', response.data.token);
        localStorage.setItem('token', response.data.token); // Guardar el token en localStorage
        this.router.navigate(['/']); 
      })
      .catch(error => {
        console.error('Error en el inicio de sesión:', error);
      });
  }

  onSignUpClick() {
    this.container.nativeElement.classList.add('right-panel-active');
  }

  onSignInClick() {
    this.container.nativeElement.classList.remove('right-panel-active');
  }
}
