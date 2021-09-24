import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/http.service';
import { LOCALE_ID, Inject } from '@angular/core';
import { of } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit  {

  loginUser: string
  user : any
  userEmail: string
  currentDate = new Date();
  dateFormat = "dd MMM yyyy";
  currentDate$ = of(formatDate(this.currentDate, this.dateFormat, this.locale));


  constructor(public _http:HttpService, private _httpService:HttpService, @Inject(LOCALE_ID) public locale: string){
    
 }

 ngOnInit(): void{
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

}
