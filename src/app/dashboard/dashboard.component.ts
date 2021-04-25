import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ServiceService } from '../service.service';
import { Users } from './user.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
   users: any = [];
  fetching = false;
  ELEMENT_DATA: Users[];
  displayedColumns: string[] = ['id', 'name', 'username', 'email', 'phone', 'website'];
  // dataSource = new MatTableDataSource<Users>();
   dataSource = [];

   constructor(private service: ServiceService) { }

  ngOnInit() {
    this.onFetchUser();
  }

  onFetchUser() {
    this.fetching = true;
    this.service.fetchUser().subscribe((res) => {
      console.log(res);
      this.users = res; // normal data
      this.dataSource = res ; // Material data
      this.fetching = false;
    });
  }

}
