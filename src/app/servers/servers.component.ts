import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
name:string='CodemindTechnology';
 serverId:number=45;
 serverStatus:string='Offline'
 alloeNewServer =false;
 imgUrl='URL- https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/512px-Typescript_logo_2020.svg.png?20221110153201'
serverCreationStatus:string='Server not created'

serverName:string='codemind.com'

  constructor() { 
    setTimeout(()=>{
      this.alloeNewServer=true
    },2000);
  }
  getServerStatus(){
    return this.serverStatus
  }
  onCreateServer(){
    this.serverCreationStatus='Server created'
  }
  ngOnInit() {}
}

