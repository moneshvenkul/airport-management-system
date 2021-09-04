import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pilots } from '../pilots';
import { PilotsListComponent } from '../pilots-list/pilots-list.component';
import { PilotsService } from '../_services/pilots.service';
import { TokenStorageService } from '../_services/token-storage.service';

@Component({
  selector: 'app-pilots-details',
  templateUrl: './pilots-details.component.html',
  styleUrls: ['./pilots-details.component.css']
})
export class PilotsDetailsComponent implements OnInit {
  @Input() pilots: Pilots;
  currentUser: any;
  togglemanager :boolean=true;

  constructor(private router: Router,private pilotsService: PilotsService, private listComponent: PilotsListComponent,private token: TokenStorageService) { }

  ngOnInit(): void {
    this.currentUser = this.token.getUser();
  }
  toggleManager(){
    this.togglemanager=!this.togglemanager;
  }

  editPilots(pilots: Pilots): void{
    console.log("into edit");
    localStorage.setItem("id",pilots.id.toString());
    this.router.navigate(["admin/viewpilots/edit"]);
  }

  deletePilots() {
    this.pilotsService.deletePilots(this.pilots.id)
      .subscribe(
        data => {
          console.log(data);
          this.listComponent.reloadData();
        },
        error => console.log(error));
  }

}
