import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { AppComponent } from './app.component';
import { CategoriesComponent } from './categories/categories.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProductListComponent } from './product-list/product-list.component';

const routes: Routes = [{ path : "", component:  HomeComponent },
{ path : "categories", component: CategoriesComponent  },
{ path : "about", component: AboutUsComponent },
{ path : "contact", component: ContactUsComponent },
{ path : "login", component: LoginComponent },
{ path : "product/:id", component: ProductListComponent },];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
