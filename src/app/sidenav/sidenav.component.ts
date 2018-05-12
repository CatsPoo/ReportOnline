import { SocketService } from './../../services/sockets/sockets.service';

import { Component, OnInit, Input } from '@angular/core';
import { Report } from '../../services/Report/report.service';


@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  @Input() reportsList: [any, any];
  
  private tasksList=[]

  constructor(private socketService:SocketService) {
    let data:any=this.socketService.getReports();
    //this.reportsList=data.reports;
    //this.tasksList=data.tasks;

      this.reportsList = [
        {
          reportTitle: 'פתיחת חסימה',
          reportTip: 'פתיחת חסימה הFW אינטרנט',
          reportDescription: 'היי <br/> אני צריך שתפתחו לי חסימה ברשת אינטרנט <br/> מכתובת 1.1.1.1 לכתובת 2.2.2.2 בפורט 443',
          reportCustomer: 'רון גורליק',
          reportTool: 'מייל',
          reportTender: {
              name: 'דניאל טלאור מוזס',
              imageUrl: 'https://scontent.fsdv2-1.fna.fbcdn.net/v/t1.0-9/22089523_1707779525908473_4601209041474943550_n.jpg?_nc_cat=0&oh=eba773e982f7a6d9331ed940ae17e099&oe=5B50F26B'
          }
        },
        {
          reportTitle: 'פתיחת חסימה',
          reportTip: 'פתיחת חסימה הFW אינטרנט',
          reportDescription: 'היי <br/> אני צריך שתפתחו לי חסימה ברשת אינטרנט <br/> מכתובת 1.1.1.1 לכתובת 2.2.2.2 בפורט 443',
          reportCustomer: 'רון גורליק',
          reportTool: 'מייל',
          reportTender: {
              name: 'דניאל טלאור מוזס',
              imageUrl: 'https://scontent.fsdv2-1.fna.fbcdn.net/v/t1.0-9/22089523_1707779525908473_4601209041474943550_n.jpg?_nc_cat=0&oh=eba773e982f7a6d9331ed940ae17e099&oe=5B50F26B'
          }
        }
      ]

   }

  ngOnInit() {
  }


}
