import { Component } from '@angular/core';
import { SocketService } from '../services/sockets/sockets.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private socket: SocketService) {
  }
}
