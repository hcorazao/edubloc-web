import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-teacher-view-class',
  templateUrl: './teacher-view-class.component.html',
  styleUrls: ['./teacher-view-class.component.scss']
})
export class TeacherViewClassComponent implements OnInit {

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
