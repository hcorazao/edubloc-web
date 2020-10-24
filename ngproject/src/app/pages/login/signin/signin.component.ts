import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  gotoSignUp() {
    this.router.navigate(['/sign-up']);
  }

  gotoResetPassword() {
    this.router.navigate(['/reset-password']);
  }

  signIn() {
    console.log("signIn");
    this.router.navigate(['/dashboard/super-admin-view-student']);
  }

}
