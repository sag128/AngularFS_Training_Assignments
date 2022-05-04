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
import { EmpRangeComponent } from './emp-range/emp-range.component';
import { SalaryRangePipe } from './salary-range.pipe';
import { EmpCrudComponent } from './emp-crud/emp-crud.component';
import { SwitchExampleComponent } from './switch-example/switch-example.component';
import { FancyCardComponent } from './fancy-card/fancy-card.component';
import { TodoComponent } from './todo/todo.component';
import { ObservableDemoComponent } from './observable-demo/observable-demo.component';
import {HttpClientModule} from '@angular/common/http'
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
    GradePipePipe,
    EmpRangeComponent,
    SalaryRangePipe,
    EmpCrudComponent,
    SwitchExampleComponent,
    FancyCardComponent,
    TodoComponent,
    ObservableDemoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
