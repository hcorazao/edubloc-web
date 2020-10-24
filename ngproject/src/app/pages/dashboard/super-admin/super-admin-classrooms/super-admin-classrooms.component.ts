import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-super-admin-classrooms',
  templateUrl: './super-admin-classrooms.component.html',
  styleUrls: ['./super-admin-classrooms.component.scss']
})
export class SuperAdminClassroomsComponent implements OnInit {
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

}
