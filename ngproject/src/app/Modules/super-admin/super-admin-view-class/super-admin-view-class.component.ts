import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-super-admin-view-class',
  templateUrl: './super-admin-view-class.component.html',
  styleUrls: ['./super-admin-view-class.component.scss']
})
export class SuperAdminViewClassComponent implements OnInit {

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  gotoSuperAdminClassrooms() {
    this.router.navigate(['/super-admin-classrooms']);
  }
  gotoSuperAdminStudentActivities() {
    this.router.navigate(['/super-admin-student-activities']);
  }
  
  gotoSignIn() {
    this.router.navigate(['/sign-in']);
  }

  gotoSuperAdminViewClass() {
    this.router.navigate(['/super-admin-view-class']);
  }

  gotoSuperAdminViewStudentActivities() {
    this.router.navigate(['/super-admin-view-student-activities']);
  }

  gotoSuperAdminViewStudent() {
    this.router.navigate(['/super-admin-view-student']);
  }

}
