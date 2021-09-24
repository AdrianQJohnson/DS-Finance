import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplyComponent } from './apply/apply.component';
import { LoginComponent } from './customers/components/login/login.component';
import { SignupComponent } from './customers/components/signup/signup.component';
import { HomepageComponent } from './homepage/homepage.component';
import { CustomerLoansDashboardComponent } from './loans/components/customer-loans-dashboard/customer-loans-dashboard.component';
import { ManagerLoansDashboardComponent } from './loans/components/manager-loans-dashboard/manager-loans-dashboard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'} , 
  {path:'home',component:HomepageComponent},
  // { path: 'loans', loadChildren: () => import('./loans/loans.module').then(m => m.LoansModule) }, 
  // { path: 'customers', loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule) },
  { path: 'loans', component:CustomerLoansDashboardComponent},
  { path: 'apps', component:ManagerLoansDashboardComponent},
  { path: 'login', component:LoginComponent},
  { path: 'signup', component:SignupComponent},
  { path: 'apply', component:ApplyComponent},
  { path: '**', component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
