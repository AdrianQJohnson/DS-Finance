import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerLoansDashboardComponent } from './customer-loans-dashboard.component';

describe('CustomerLoansDashboardComponent', () => {
  let component: CustomerLoansDashboardComponent;
  let fixture: ComponentFixture<CustomerLoansDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerLoansDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerLoansDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
