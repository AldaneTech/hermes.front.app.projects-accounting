import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './auth.guard';
import { CategoriesComponent } from './components/categories/categories.component';
import { BrandsComponent } from './components/brands/brands.component';
import { StoresComponent } from './components/stores/stores.component';
// Importa otros componentes según sea necesario

const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthGuard] }, // Proteger la ruta raíz
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] }, // Proteger la ruta de categorías

  { path: 'categories', component: CategoriesComponent, canActivate: [AuthGuard] }, // Proteger la ruta de categorías
  { path: 'brands', component: BrandsComponent, canActivate: [AuthGuard] }, // Proteger la ruta de marcas
  { path: 'stores', component: StoresComponent, canActivate: [AuthGuard] }, // Proteger la ruta de tiendas
  { path: '**', redirectTo: '/login' } // Redirigir cualquier ruta no encontrada al login
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
