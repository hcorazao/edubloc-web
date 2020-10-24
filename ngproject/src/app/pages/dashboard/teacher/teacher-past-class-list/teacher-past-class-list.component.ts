import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-teacher-past-class-list',
  templateUrl: './teacher-past-class-list.component.html',
  styleUrls: ['./teacher-past-class-list.component.scss']
})
export class TeacherPastClassListComponent implements OnInit {

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
