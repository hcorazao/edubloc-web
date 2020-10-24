import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-super-admin-student-activities',
  templateUrl: './super-admin-student-activities.component.html',
  styleUrls: ['./super-admin-student-activities.component.scss']
})
export class SuperAdminStudentActivitiesComponent implements OnInit {

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  gotoSuperAdminClassrooms() {
    this.router.navigate(['/dashboard/super-admin-classrooms']);
  }
  gotoSuperAdminStudentActivities() {
    this.router.navigate(['/dashboard/super-admin-student-activities']);
  }
  
  gotoSignIn() {
    this.router.navigate(['/sign-in']);
  }

  gotoSuperAdminViewClass() {
    this.router.navigate(['/dashboard/super-admin-view-class']);
  }

  gotoSuperAdminViewStudentActivities() {
    this.router.navigate(['/dashboard/super-admin-view-student-activities']);
  }

  gotoSuperAdminViewStudent() {
    this.router.navigate(['/dashboard/super-admin-view-student']);
  }

}
