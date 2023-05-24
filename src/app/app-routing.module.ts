import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { EditComponent } from './components/edit/edit.component';
import { CitizenListComponent } from './components/citizen-list/citizen-list.component';
import{ SearchComponent } from './components/search/search.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"register",component:RegisterComponent},
  {path:"search",component:SearchComponent},
  {path:"login",component:LoginComponent},
  {path:"editCitizen/:id",component:EditComponent},
  {path:"listCitizen",component:CitizenListComponent},
  {path:"**",component:HomeComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
