import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainLayoutComponent } from '../main-layout/main-layout.component';
import { LoginComponent } from '../login/login.component';
import { ResetPasswordComponent } from '../reset-password/reset-password.component';

const routes: Routes = [
  { path: '', redirectTo: 'Login', pathMatch: 'full' },
  { path: 'Login', component: LoginComponent },
  { path: 'ResetPassword', component: ResetPasswordComponent },
  {
    path: '',
        component: MainLayoutComponent,
        children: [
{path: 'Dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule'},

        ]
      }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayOutRoutingModule { }
