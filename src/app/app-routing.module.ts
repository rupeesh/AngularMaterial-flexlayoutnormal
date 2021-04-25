import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GraphsComponent } from './graphs/graphs.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { OwlsliderComponent } from './owlslider/owlslider.component';

const routes: Routes = [
{path: '', redirectTo: 'login', pathMatch: 'full'},
{path: 'login', component: LoginComponent},
{path: 'dashboard', component: DashboardComponent},
{path: 'home', children: [
{path: '', component:HomeComponent},
{path: 'owlslider', component:OwlsliderComponent},
{path: 'graphs', component:GraphsComponent},


]
}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
