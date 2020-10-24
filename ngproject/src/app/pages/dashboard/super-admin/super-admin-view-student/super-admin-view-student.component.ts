import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-super-admin-view-student',
  templateUrl: './super-admin-view-student.component.html',
  styleUrls: ['./super-admin-view-student.component.scss']
})
export class SuperAdminViewStudentComponent implements OnInit {
  faSignOutAlt = faSignOutAlt;

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

}
