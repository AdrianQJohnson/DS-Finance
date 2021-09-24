import { Component, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/http.service';
import { DialogComponentComponent } from '../dialog-component/dialog-component.component';

@Component({
  selector: 'app-loans-list',
  templateUrl: './loans-list.component.html',
  styleUrls: ['./loans-list.component.css']
})
export class LoansListComponent {
  loanList: any
  userEmail: string
  user: any
  loan: any

  constructor(private _httpService:HttpService, private _router: Router,private _dialog: MatDialog) { }

  ngOnInit(): void {
    this._httpService.getLoanDetails().subscribe(
      (result)=>{
          this.loanList = result
      },
      (error)=>{
        console.log(error.message)
      }
    )
  }

  openDialog(){

  }

  applyNow(loan){
    this.loan = loan

    this._httpService.getUserDetails().subscribe(
      (result)=>{
          this.userEmail = sessionStorage.getItem("user")
          this.user = result.find((res:any) => res.email === this.userEmail)

          if(this.user['appliedLoans'].includes(this.loan.title)){
            alert("You have already applied for this loan.")
          }
          else {
            const dialogRef =  this._dialog.open(DialogComponentComponent, {data:this.loan})
            dialogRef.afterClosed().subscribe(
            res=>console.log(res)
          )

            // this.openDialog()
            // this._router.navigate(['apply'])

            // this.user['appliedLoans'] = this.user['appliedLoans'].concat(loan.title, ',')
            // this._httpService.updateExistingUser(this.user).subscribe(
            //   ()=>{
            //     console.log("User data has been updated")
            //   },
            //   (error)=>console.log(error.message)
            // )
          }
      },
      (error)=>{
        console.log(error.message)
      }
    )
  }

}
