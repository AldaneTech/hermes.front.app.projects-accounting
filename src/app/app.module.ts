import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthInterceptor } from './services/auth.interceptor';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { DropdownModule } from 'primeng/dropdown';
import { WalletsComponent } from './components/wallets/wallets.component';
import { ButtonModule } from 'primeng/button'; // Importa el módulo del botón
import { DialogModule } from 'primeng/dialog';
import { TableModule } from 'primeng/table';
import { FormWalletComponent } from './components/wallets/form-wallet/form-wallet.component';
import { MovementsComponent } from './components/movements/movements.component';
import { FormEntryComponent } from './components/movements/form-entry/form-entry.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { StoresComponent } from './components/stores/stores.component';
import { BrandsComponent } from './components/brands/brands.component';
import { FormBrandComponent } from './components/brands/form-brand/form-brand.component';
import { FormStoreComponent } from './components/stores/form-store/form-store.component';
import { FormCategoryComponent } from './components/categories/form-category/form-category.component'; // Importar el módulo de diálogo

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    NavbarComponent,
    WalletsComponent,
    FormWalletComponent,
    MovementsComponent,
    FormEntryComponent,
    CategoriesComponent,
    StoresComponent,
    BrandsComponent,
    FormBrandComponent,
    FormStoreComponent,
    FormCategoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    TableModule,
    DropdownModule,
    DialogModule,
    ButtonModule
    
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
