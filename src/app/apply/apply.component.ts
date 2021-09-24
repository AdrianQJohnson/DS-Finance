import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-apply',
  templateUrl: './apply.component.html',
  styleUrls: ['./apply.component.css']
})
export class ApplyComponent implements OnInit {
  loginUser: string
  user: any
  userEmail: string
  applyForm: any

  constructor(private _httpService: HttpService, private _router:Router) {}

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
    this.applyForm.value.termLength = 
    

    console.log(this.applyForm)

    // this._httpService.createApp(this.applyForm.value).subscribe(
    //   (result)=>{
    //     alert("Application Submitted successfully")
    //     this._router.navigate(['loans'])
    //   },
    //   (error)=>{
    //     console.log(error.message)
    //   }
    // )

  }

}
