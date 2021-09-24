import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/http.service';

@Component({
  selector: 'app-dialog-component',
  templateUrl: './dialog-component.component.html',
  styleUrls: ['./dialog-component.component.css']
})
export class DialogComponentComponent implements OnInit {
  loginUser: string
  user: any
  userEmail: string
  applyForm: any
  loanList: any

  constructor(@Inject(MAT_DIALOG_DATA) private loan: any,private _httpService: HttpService, private _router:Router) {}

  ngOnInit(): void {

    this._httpService.getUserDetails().subscribe(
      (result)=>{
        this.userEmail = sessionStorage.getItem("user")
        this.user = result.find((res:any) => res.email === this.userEmail)
        this.loginUser = this.user['name']
      },
      (error)=>{
        console.log(error.message)
      }
    )
  }

  getDate() {
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0');
    let yyyy = today.getFullYear();

    return mm + '-' + dd + '-' + yyyy;
  }

  onSubmit(applyForm) {
    this.applyForm = applyForm
    this.applyForm.value.applicant = this.user['name']
    this.applyForm.value.status = "Pending"
    this.applyForm.value.appliedDate = this.getDate()
    this.applyForm.value.processingFee = this.loan.processingFee
    this.applyForm.value.termLength = this.loan.termLength
    this.applyForm.value.interestRate = 7.49
    this.applyForm.value.loan = this.loan.title
    
    this._httpService.createApp(this.applyForm.value).subscribe(
      (result)=>{
        alert("Application Submitted successfully")
        this.user['appliedLoans'] = this.user['appliedLoans'].concat(this.loan.title, ',')
        this._httpService.updateExistingUser(this.user).subscribe(
            ()=>{
              console.log("User data has been updated")
            },
            (error)=>console.log(error.message)
          )
      },
      (error)=>{
        console.log(error.message)
      }
    )

  }

}
