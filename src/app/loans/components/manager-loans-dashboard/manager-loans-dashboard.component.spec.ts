import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerLoansDashboardComponent } from './manager-loans-dashboard.component';

describe('ManagerLoansDashboardComponent', () => {
  let component: ManagerLoansDashboardComponent;
  let fixture: ComponentFixture<ManagerLoansDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagerLoansDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerLoansDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
