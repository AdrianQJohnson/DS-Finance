import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/http.service';

@Component({
  selector: 'app-rejected-applications',
  templateUrl: './rejected-applications.component.html',
  styleUrls: ['./rejected-applications.component.css']
})
export class RejectedApplicationsComponent implements OnInit {
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
