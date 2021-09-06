import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emp-list',
  templateUrl: './emp-list.component.html',
  styleUrls: ['./emp-list.component.scss']
})
export class EmpListComponent implements OnInit {

  departments = [
    {"id": 1, "name" : "angular"},
    {"id": 2, "name" : "Mongodb"},
    {"id": 3, "name" : "Java"},
    {"id": 4, "name" : "Python"},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
