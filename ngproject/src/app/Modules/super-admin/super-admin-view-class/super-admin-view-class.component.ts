import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-super-admin-view-class',
  templateUrl: './super-admin-view-class.component.html',
  styleUrls: ['./super-admin-view-class.component.scss']
})
export class SuperAdminViewClassComponent implements OnInit {

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

}
