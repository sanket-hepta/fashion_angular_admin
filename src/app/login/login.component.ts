import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  title = environment.title;
  retUrl:string = 'dashboard';
  message:string = '';
  error_message:string = '';

  loginForm: FormGroup;
  submitted:boolean = false;

  constructor(private authService: AuthService, private router: Router, private activedRoute: ActivatedRoute, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email:['',[Validators.required, Validators.email]],
      password:['',[Validators.required, Validators.minLength(8)]]

    });

    if(this.authService.isUserLoggedIn()){
      this.router.navigate( [this.retUrl]);
    }
  }

  get form(){
    return this.loginForm.controls;
  }

  onSubmit(){
    this.submitted = true;
    if(this.loginForm.invalid){
      return false;
    }

    this.authService.login(this.loginForm.value.email, this.loginForm.value.password).subscribe(
      (data) => {
        if(data.status && data.data.isAdmin){
          this.authService.isLoggedIn = true
          localStorage.setItem('isLoggedIn', "true");
          localStorage.setItem('token', data.data.token);
          this.router.navigate( [this.retUrl]);
        }else{
          this.error_message = data.message;
        }
      }, 
      (error) => {
        let result = error.error;
        if(!result.status){
          this.error_message = result.message;
        }
      }  
    );

    return true;
  }

}
