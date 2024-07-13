import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CreatemetroComponent } from './components/metro/createmetro/createmetro.component';
import { SearchmetroComponent } from './components/metro/searchmetro/searchmetro.component';
import { UpdatemetroComponent } from './components/metro/updatemetro/updatemetro.component';
import { GetallmetroComponent } from './components/metro/getallmetro/getallmetro.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
 // {path:'submit',component:CreatecabComponent},
 { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'add', component:CreatemetroComponent},
  { path:'search/:id', component:SearchmetroComponent},
  { path: 'update/:id', component:UpdatemetroComponent},
  { path: 'get' , component:GetallmetroComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
