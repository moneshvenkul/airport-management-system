import { Component, Input, OnInit } from '@angular/core';
import { ManagersService} from '../_services/managers.service';
import { Manager } from '../Manager';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-board-admin',
  templateUrl: './board-admin.component.html',
  styleUrls: ['./board-admin.component.css']
})
export class BoardAdminComponent implements OnInit {

 
  managers : Observable<Manager[]>;

  content: string;

  togglemanager :boolean=true;

  p: Number = 1;
  count: Number = 2;

  constructor(private managersService: ManagersService) { }



  reloadData(){
    this.managers = this.managersService.getManagersList();
  }


  ngOnInit(): void {
    this.reloadData();
  }

  toggleManager(){
    this.togglemanager=!this.togglemanager;
  }

  deleteUsers() {
    this.managersService.deleteAll()
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log('ERROR: ' + error));
  }
}
