import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dept-list',
  templateUrl: './dept-list.component.html',
  styleUrls: ['./dept-list.component.scss']
})
export class DeptListComponent implements OnInit {
  departments = [
    {"id": 1, "name" : "angular"},
    {"id": 2, "name" : "Mongodb"},
    {"id": 3, "name" : "Java"},
    {"id": 4, "name" : "Python"},
  ]

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onClick(item:any){
    console.log("hello")
    this.router.navigate(['/departments', item.id])
  }

}
