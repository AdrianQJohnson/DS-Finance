import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/http.service';

@Component({
  selector: 'app-all-applications',
  templateUrl: './all-applications.component.html',
  styleUrls: ['./all-applications.component.css']
})
export class AllApplicationsComponent {
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
