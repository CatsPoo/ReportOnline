import { Component, OnInit, Input } from '@angular/core';

import { SocketService } from '../../services/sockets/sockets.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  @Input() reportsList: [{}];
  

  constructor(private socket: SocketService) { }

  ngOnInit() {
    this.socket.testConnection();
  }

}
