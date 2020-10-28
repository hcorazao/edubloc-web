import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-super-admin-nodata-student',
  templateUrl: './super-admin-nodata-student.component.html',
  styleUrls: ['./super-admin-nodata-student.component.scss']
})
export class SuperAdminNodataStudentComponent implements OnInit {

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
