import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import {catchError} from 'rxjs/Operators';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})

// Run JSON: 
// npm install -g json-server
// json-server --watch db.json

export class HttpService {
  USER_API_URL = "http://localhost:3000/user"
  APP_API_URL = "http://localhost:3000/appList"
  LOAN_API_URL = "http://localhost:3000/loanList"

  constructor(private _http:HttpClient, private _router:Router) { }


  getApplicationDetails():Observable<any>{
    return this._http.get(this.APP_API_URL).pipe(catchError(this.handleError))
  }

  getLoanDetails():Observable<any>{
    return this._http.get(this.LOAN_API_URL).pipe(catchError(this.handleError))
  }

  getUserDetails():Observable<any>{
    return this._http.get(this.USER_API_URL).pipe(catchError(this.handleError))
 }

   /* 
    POST : 
     url = > http://localhost:3000/posts
     data => {title,body}
     header => content-type , application/json
   */

     handleError(error:HttpErrorResponse){
      let errormessage = "Unknown Error"
      if(error.error instanceof ErrorEvent){
        // Client-side error
        errormessage = `Error${error.message}`
      }
      else{
          //Server-side error
          errormessage = `Error Code ${error.status}\n Message: ${error.message}`
      }
      alert(errormessage)
      return throwError(errormessage)

   }

   isLoggedIn(){
    return sessionStorage.getItem('user')
  }
  logOut(){
    sessionStorage.removeItem('user')
    this._router.navigate(['login'])
  }

  updateExistingRecord(dataForUpdate:any):Observable<any>{
   
   return this._http.put<any>(
      `${this.APP_API_URL}/${dataForUpdate.id}`,
       dataForUpdate,
       {
       headers:new HttpHeaders({"content-type":"application/json"})
       }

   )

 }

 updateExistingUser(dataForUpdate:any):Observable<any>{
   
  return this._http.put<any>(
     `${this.USER_API_URL}/${dataForUpdate.id}`,
      dataForUpdate,
      {
      headers:new HttpHeaders({"content-type":"application/json"})
      }

  )

}

 createUser(userData:any):Observable<any>{
  return this._http.post<any>(
    this.USER_API_URL,
    userData,
    {
      headers:new HttpHeaders({"content-type":"application/json"})
    }
  )
}

createApp(appData:any):Observable<any>{
  return this._http.post<any>(
    this.APP_API_URL,
    appData,
    {
      headers:new HttpHeaders({"content-type":"application/json"})
    }
  )
}
}
