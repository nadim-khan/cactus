import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Asssignment1Component } from './asssignment1/asssignment1.component';
import { Asssignment2Component } from './asssignment2/asssignment2.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {path:'assignment1',component:Asssignment1Component},
  {path:'assignment2',component:Asssignment2Component},
  {path:'users',component:UsersComponent},
  {path:'**',redirectTo:'assignment1'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
