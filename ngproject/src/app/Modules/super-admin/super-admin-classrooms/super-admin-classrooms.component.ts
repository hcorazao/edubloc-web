import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-super-admin-classrooms',
  templateUrl: './super-admin-classrooms.component.html',
  styleUrls: ['./super-admin-classrooms.component.scss']
})
export class SuperAdminClassroomsComponent implements OnInit {
  faSignOutAlt = faSignOutAlt;

  constructor() { }

  ngOnInit(): void {
  }

}
