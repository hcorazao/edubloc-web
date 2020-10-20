import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-super-admin-student-activities',
  templateUrl: './super-admin-student-activities.component.html',
  styleUrls: ['./super-admin-student-activities.component.scss']
})
export class SuperAdminStudentActivitiesComponent implements OnInit {

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

}
