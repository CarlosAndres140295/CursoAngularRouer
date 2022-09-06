import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


// Vistas
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { CategoryComponent } from './pages/category/category.component';
import { MycartComponent } from './pages/mycart/mycart.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { RecoveryComponent } from './pages/recovery/recovery.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';


const routes: Routes = [
  // { path: '', component: HomeComponent}, //Primera opcion
  { path: '', redirectTo: '/home', pathMatch: 'full'}, // Mejor forma haciendo redirect a home
  { path: 'home', component: HomeComponent},
  { path: 'category/:id', component: CategoryComponent}, // Agregamos parametros a la ruta
  { path: 'login', component: LoginComponent},
  { path: 'mycart', component: MycartComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'profile', component: ProfileComponent},
  { path: 'recovery', component: RecoveryComponent},
  { path: 'product/:id', component: ProductDetailComponent},
  { path: '**', component: NotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
