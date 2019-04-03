import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-serverevent',
  templateUrl: './serverevent.component.html',
  styleUrls: ['./serverevent.component.css']
})
export class ServereventComponent implements OnInit {


  allowNewServer = false;
  serverCreationStatus = "No server was created";
  serverName = 'TestServer';
  constructor() {
    setTimeout(() => {
      this.allowNewServer =true;
    },3000);
   }

  ngOnInit() {
  }

  onCreateServer(){
    this.serverCreationStatus = "server was created";
  }

  onUpdateServerName(event: any)
  {
this.serverName = (<HTMLInputElement>event.target).value;
  }

}
