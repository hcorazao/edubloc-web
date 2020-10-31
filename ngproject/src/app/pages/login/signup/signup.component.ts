import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  gotoSignIn() {
    this.router.navigate(['/sign-in']);
  }

  gotoSignUp() {
    this.router.navigate(['/sign-up']);
  }

  gotoSignUpParent() {
    this.router.navigate(['/sign-up-parent']);
  }

  gotoTeacher() {
    this.router.navigate(['/dashboard/teacher']);
  }
}
