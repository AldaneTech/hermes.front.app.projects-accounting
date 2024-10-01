import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './auth.guard';
// Importa otros componentes según sea necesario

const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthGuard] }, // Proteger la ruta raíz
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: '/login' } // Redirigir cualquier ruta no encontrada al login
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
