import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { EmpComponent } from './emp/emp.component';
import { FormsModule } from '@angular/forms';
import { DeptListComponent } from './dept-list/dept-list.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductComponent } from './product/product.component';
import { SortListComponent } from './sort-list/sort-list.component';
import { EmpListComponent } from './emp-list/emp-list.component';
import { GradePipePipe } from './grade-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EmpComponent,
    DeptListComponent,
    ProductListComponent,
    ProductComponent,
    SortListComponent,
    EmpListComponent,
    GradePipePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
