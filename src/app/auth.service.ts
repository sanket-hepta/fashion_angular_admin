import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public isLoggedIn = false;
  private username:string;

  constructor(private http:HttpClient) {
    this.isLoggedIn = false;
  }

  login(username:string, password: string):Observable<any>{
    return this.http.post(`${environment.apiURL}auth/sign-in`, {email: username, password: password});
    // if(username == 'sanket@hepta.me' && password == 'Welcome123*'){
    //   this.isLoggedIn = true;
    //   this.username = username;
    //   localStorage.setItem('isLoggedIn', "true");
    // }

    // return of(this.isLoggedIn);
  }

  isUserLoggedIn():boolean{
    if (localStorage.getItem('isLoggedIn') == "true") {
      this.isLoggedIn = true;
    }else{
      this.isLoggedIn = false;
    }
    return this.isLoggedIn;
  }

  isAdminUser():boolean{
    if(this.username == 'Admin'){
      return true;
    }
    return false;
  }

  logoutUser(): void{
    this.isLoggedIn = false;
    localStorage.setItem('isLoggedIn', "false");
}

}
