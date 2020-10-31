import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-teacher-view-student-nodata',
  templateUrl: './teacher-view-student-nodata.component.html',
  styleUrls: ['./teacher-view-student-nodata.component.scss']
})
export class TeacherViewStudentNodataComponent implements OnInit {

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }
  gotoSignIn() {
    this.router.navigate(['/sign-in']);
  }

  gotoTeacherViewClass() {
    this.router.navigate(['/dashboard/teacher-view-class']);
  }

  gotoTeacherPastClassList() {
    this.router.navigate(['/dashboard/teacher-past-class-list']);
  }

  gotoTeacherViewStudent() {
    this.router.navigate(['/dashboard/teacher-view-student']);
  }
}
