import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/http.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  signupForm:any
  email:string
  password:string
  userId:number
  constructor(private _httpService:HttpService, private _router: Router) {
     
   }

  
  onSubmit(signupForm){

    this.signupForm = signupForm
    this.email = this.signupForm.value.email
    this.password = this.signupForm.value.password
    this.signupForm.value.role = "customer"
    this.signupForm.value.appliedLoans = ""
    console.log(this.signupForm.value)

    this._httpService.createUser(this.signupForm.value).subscribe(
      (result)=>{
        alert("Account Created successfully")
        sessionStorage.setItem("user",signupForm.value.name)
        this._router.navigate(['loans'])
      },
      (error)=>{
        console.log(error.message)
      }
    )
  }
}
