import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoansRoutingModule } from './loans-routing.module';
import { LoansComponent } from './loans.component';
import { CustomerLoansDashboardComponent } from './components/customer-loans-dashboard/customer-loans-dashboard.component';
import { MaterialModule } from '../material/material.module';
import { LoansListComponent } from './components/customer-loans-dashboard/loans-list/loans-list.component';
import { AppliedLoansComponent } from './components/customer-loans-dashboard/applied-loans/applied-loans.component';
import { ManagerLoansDashboardComponent } from './components/manager-loans-dashboard/manager-loans-dashboard.component';
import { AllApplicationsComponent } from './components/manager-loans-dashboard/all-applications/all-applications.component';
import { PendingApplicationsComponent } from './components/manager-loans-dashboard/pending-applications/pending-applications.component';
import { ApprovedApplicationsComponent } from './components/manager-loans-dashboard/approved-applications/approved-applications.component';
import { RejectedApplicationsComponent } from './components/manager-loans-dashboard/rejected-applications/rejected-applications.component';
import { DialogComponentComponent } from './components/customer-loans-dashboard/dialog-component/dialog-component.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    LoansComponent,
    CustomerLoansDashboardComponent,
    LoansListComponent,
    AppliedLoansComponent,
    ManagerLoansDashboardComponent,
    AllApplicationsComponent,
    PendingApplicationsComponent,
    ApprovedApplicationsComponent,
    RejectedApplicationsComponent,
    DialogComponentComponent
  ],
  imports: [
    CommonModule,
    LoansRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    LoansComponent,
    LoansListComponent,
    AppliedLoansComponent
  ]
})
 
export class LoansModule { }
