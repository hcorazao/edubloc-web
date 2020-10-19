import { Component, OnInit } from '@angular/core';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-super-admin-view-student',
  templateUrl: './super-admin-view-student.component.html',
  styleUrls: ['./super-admin-view-student.component.scss']
})
export class SuperAdminViewStudentComponent implements OnInit {
  faSignOutAlt = faSignOutAlt;

  constructor() { }

  ngOnInit(): void {
  }

}
