import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Manager } from '../Manager';
import { ManagersService } from '../_services/managers.service';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-edit-manager',
  templateUrl: './edit-manager.component.html',
  styleUrls: ['./edit-manager.component.css']
})
export class EditManagerComponent implements OnInit {

  manager: Manager = new Manager();
  constructor(private userService: UserService, private managersService:ManagersService, private router:Router) { }

  ngOnInit(): void {
    this.editManager();
  }

  editManager(){
    let id=localStorage.getItem("id");
    this.managersService.getManagers(+id)
    .subscribe(data=>{
      this.manager=data;
    })
  }

  onUpdate(){
    console.log("into update");
    this.managersService.updateManagers(this.manager)
          .subscribe(data => {
     console.log(data);
     this.router.navigate(["admin"]);
    }, error => console.log(error));
        this.manager = new Manager();
    }

}
