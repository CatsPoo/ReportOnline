import { SocketService } from './../../services/sockets/sockets.service';

import { Component, OnInit, Input } from '@angular/core';
import { Report } from '../../services/Report/report.service';


@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  
  private reportsList=[
    new Report(
      new Date(1,2,2),
    "12:12",
    "Ron Gorlik",
    "Internet",
    "Block",
    true)
  ];
  private tasksList=[]

  constructor(private socketService:SocketService) {
    let data:any=this.socketService.getReports();
    //this.reportsList=data.reports;
    //this.tasksList=data.tasks;

   }

  ngOnInit() {
  }


}
