import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/http.service';

@Component({
  selector: 'app-approved-applications',
  templateUrl: './approved-applications.component.html',
  styleUrls: ['./approved-applications.component.css']
})
export class ApprovedApplicationsComponent  {
  appList: any

  constructor(private _httpService:HttpService) { }

  ngOnInit(): void {
    this._httpService.getApplicationDetails().subscribe(
      (result)=>{
          this.appList = result
      },
      (error)=>{
        console.log(error.message)
      }
    )
  }

}
