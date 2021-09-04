import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { BoardAdminComponent } from '../board-admin/board-admin.component';
import { Manager } from '../Manager';
import { ManagersService } from '../_services/managers.service';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-managers-list',
  templateUrl: './managers-list.component.html',
  styleUrls: ['./managers-list.component.css']
})
export class ManagersListComponent implements OnInit {

  @Input() manager: Manager;

  togglemanager :boolean=true;

  constructor(private userService: UserService,private managersService:ManagersService, private router: Router, private listComponent: BoardAdminComponent) { }

  ngOnInit(): void {
  
  }

  toggleManager(){
    this.togglemanager=!this.togglemanager;
  }

  

  editManagers(manager: Manager): void{
    console.log("into edit");
    console.log(manager.id);
    localStorage.setItem("id",manager.id.toString());
    this.router.navigate(["edit"]);
  }

  deleteManagers() {
    this.managersService.deleteManagers(this.manager.id)
      .subscribe(
        data => {
          console.log(data);
          this.listComponent.reloadData();
        },
        error => console.log(error));
  }


}
