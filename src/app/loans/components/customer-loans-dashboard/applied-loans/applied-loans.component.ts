import { Component } from '@angular/core';
import { MatGridTileHeaderCssMatStyler } from '@angular/material/grid-list';
import { HttpService } from 'src/app/http.service';

@Component({
  selector: 'app-applied-loans',
  templateUrl: './applied-loans.component.html',
  styleUrls: ['./applied-loans.component.css']
})
export class AppliedLoansComponent {
  appliedLoanList: any
  user: any
  userEmail: string
  loan: any
  appList: any
  app: any

  constructor(private _httpService:HttpService) { }

  ngOnInit(): void {
    this._httpService.getUserDetails().subscribe(
      (result)=>{
        this.userEmail = sessionStorage.getItem("user")
        this.user = result.find((res:any) => res.email === this.userEmail)
        
        // if(this.user['appliedLoans'].includes(loan.title)){
        //   alert("You have already applied for this loan.")
        // }
      }
    )
    this._httpService.getLoanDetails().subscribe(
      (result)=>{
          this.appliedLoanList = result
      },
      (error)=>{
        console.log(error.message)
      }
    )
    this._httpService.getApplicationDetails().subscribe(
      (result) => {
        this.appList = result
      },
      (error)=>{
        console.log(error.message)
      }
    )
  }

  findAppliedAmount(loan){
    this.loan = loan
    this.app = this.appList.find((res:any) => res.applicant === this.user['name'] && res.loan === this.loan.title)

    return this.app.appliedAmount
  }

  checkAppStatus(loan){
    this.loan = loan
    this.app = this.appList.find((res:any) => res.applicant === this.user['name'] && res.loan === this.loan.title)

    return this.app.status
  }

}
