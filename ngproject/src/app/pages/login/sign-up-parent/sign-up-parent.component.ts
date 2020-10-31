import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './sign-up-parent.component.html',
  styleUrls: ['./sign-up-parent.component.scss']
})
export class SignUpParentComponent implements OnInit {

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

  gotoParents() {
    this.router.navigate(['/dashboard/parents']);
  }
}
