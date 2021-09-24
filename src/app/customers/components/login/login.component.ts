import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { listenerCount } from 'process';
import { HeaderComponent } from 'src/app/shared/header/header.component';
import { HttpService } from '../../../http.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm:any
  email:string
  password:string
  userId:number
  constructor(private _httpService:HttpService, private _router: Router) {
     
   }

  
  onSubmit(loginForm){

    this.loginForm = loginForm
    this.email = this.loginForm.value.email
    this.password = this.loginForm.value.password

    this._httpService.getUserDetails().subscribe(
      (result)=>{
          let foundUser = result.find((res:any) => res.email === this.email)
          let foundPassword = result.find((res:any) => res.password === this.password)

          
          if(foundUser && foundPassword){
             sessionStorage.setItem("user",foundUser['email'])
             if (foundUser['role'] == 'customer'){
                this._router.navigate(['loans'])
             } else if (foundUser['role'] == 'manager') {
                this._router.navigate(['apps'])
             }
          }
          else{
              alert("Username/Password does Not match")
          }
      },
      (error)=>{
        console.log(error.message)
      }
    )
  }
}
