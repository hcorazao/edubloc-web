import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { Component, OnInit } from '@angular/core';

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
