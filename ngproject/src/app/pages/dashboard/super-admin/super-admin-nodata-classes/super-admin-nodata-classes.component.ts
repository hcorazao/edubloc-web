import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-super-admin-nodata-classes',
  templateUrl: './super-admin-nodata-classes.component.html',
  styleUrls: ['./super-admin-nodata-classes.component.scss']
})
export class SuperAdminNodataClassesComponent implements OnInit {
  faSignOutAlt = faSignOutAlt;
  
  constructor(
    private router: Router,
  ) {
   }

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
