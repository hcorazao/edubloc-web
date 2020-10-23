import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-teacher-view-student',
  templateUrl: './teacher-view-student.component.html',
  styleUrls: ['./teacher-view-student.component.scss']
})
export class TeacherViewStudentComponent implements OnInit {

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  gotoSignIn() {
    this.router.navigate(['/sign-in']);
  }

  gotoTeacherViewClass() {
    this.router.navigate(['/teacher-view-class']);
  }

  gotoTeacherPastClassList() {
    this.router.navigate(['/teacher-past-class-list']);
  }

  gotoTeacherViewStudent() {
    this.router.navigate(['/teacher-view-student']);
  }

}
