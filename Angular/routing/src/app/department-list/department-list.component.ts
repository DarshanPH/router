import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.scss']
})
export class DepartmentListComponent implements OnInit {
  public departmentID?:number;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    let id:number = parseInt(this.route.snapshot.paramMap.get('id') || '{}');
    this.departmentID = id;
    console.log(this.departmentID)
  }

}
