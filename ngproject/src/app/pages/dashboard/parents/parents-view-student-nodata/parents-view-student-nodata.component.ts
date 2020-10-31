import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-parents-view-student-nodata',
  templateUrl: './parents-view-student-nodata.component.html',
  styleUrls: ['./parents-view-student-nodata.component.scss']
})
export class ParentsViewStudentNodataComponent implements OnInit {

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  gotoSignIn() {
    this.router.navigate(['/sign-in']);
  }

}
