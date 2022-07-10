import { Component, OnInit } from '@angular/core';
import {Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.css']
})
export class MainHeaderComponent implements OnInit {

  ngOnInit(): void {
  }

  constructor(private router:Router, private authService: AuthService){}

  logout(){
    this.authService.logoutUser();
    this.router.navigate(['admin/login']);
  }

}
