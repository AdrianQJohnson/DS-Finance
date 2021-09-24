import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/http.service';

@Component({
  selector: 'app-pending-applications',
  templateUrl: './pending-applications.component.html',
  styleUrls: ['./pending-applications.component.css']
})
export class PendingApplicationsComponent implements OnInit {
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

  approve(app){
    app.status = "Approved"
    console.log(app)

    this._httpService.updateExistingRecord(app).subscribe(
      ()=>{
        alert("Data is updated")
      },
      (error)=>console.log(error.message)
    )
  }

  reject(app){
    app.status = "Rejected"
    console.log(app)

    this._httpService.updateExistingRecord(app).subscribe(
      ()=>{
        alert("Data is updated")
      },
      (error)=>console.log(error.message)
    )
  }
  

}
