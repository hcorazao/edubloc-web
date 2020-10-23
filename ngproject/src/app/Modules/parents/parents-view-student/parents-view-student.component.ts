import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-parents-view-student',
  templateUrl: './parents-view-student.component.html',
  styleUrls: ['./parents-view-student.component.scss']
})
export class ParentsViewStudentComponent implements OnInit {

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  gotoSignIn() {
    this.router.navigate(['/sign-in']);
  }

}
