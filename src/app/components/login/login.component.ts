import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { User, UserService } from '@aldanetech/accounting-api-client-angular';
import axios from 'axios';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  
  username: string = '';
  password: string = '';
  email: string = '';
  repeatPassword: string = '';
  @ViewChild('container') container!: ElementRef;

  passwordFieldType: string = 'password';

  constructor(private router: Router, private userService: UserService) {}

  ngOnInit(): void {
    const token = localStorage.getItem('token');
    if (token) {
      this.router.navigate(['/']);
    }
    document.body.style.backgroundColor = '#d4d4d4';
  }

  onSubmit() {
    const credentials = { username: this.username, password: this.password };

    axios.post('http://localhost:8080/accounting/login', credentials)
      .then(response => {
        localStorage.setItem('token', response.data.token);
        this.router.navigate(['/']); 
      })
      .catch(error => {
        console.error('Error en el inicio de sesión:', error);
      });
  }

  onRegister(){
    if(this.password !== this.repeatPassword){
      return;
    }
    let newUser: User = {
      username: this.username,
      password: this.password,
      email: this.email,
      status: { id: 1},
      role: {id: 1}
    }
    this.userService.createUser(newUser).subscribe({
      next: (user) => {
        this.onSignInClick();
      },
      error: (msg) => {

      }
    })
  }

  onSignUpClick() {
    this.container.nativeElement.classList.add('right-panel-active');
  }

  onSignInClick() {
    this.container.nativeElement.classList.remove('right-panel-active');
  }
  togglePasswordVisibility() {
    this.passwordFieldType = this.passwordFieldType === 'password' ? 'text' : 'password';
  }
}
