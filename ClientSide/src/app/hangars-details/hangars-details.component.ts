import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Hangars } from '../hangars';
import { HangarsListComponent } from '../hangars-list/hangars-list.component';
import { HangarsService } from '../_services/hangars.service';
import { TokenStorageService } from '../_services/token-storage.service';

@Component({
  selector: 'app-hangars-details',
  templateUrl: './hangars-details.component.html',
  styleUrls: ['./hangars-details.component.css']
})
export class HangarsDetailsComponent implements OnInit {
  @Input() hangars: Hangars;
  currentUser: any;

  constructor(private router: Router,private token: TokenStorageService,private hangarsService: HangarsService, private listComponent: HangarsListComponent) { }
  togglemanager :boolean=true;
  ngOnInit(): void {
    this.currentUser = this.token.getUser();
  }

  editHangars(hangars: Hangars): void{
    console.log("into edit");
    localStorage.setItem("id",hangars.id.toString());
    this.router.navigate(["admin/viewhangars/edit"]);
  }

  toggleManager(){
    this.togglemanager=!this.togglemanager;
  }

  deleteHangars() {
    this.hangarsService.deleteHangars(this.hangars.id)
      .subscribe(
        data => {
          console.log(data);
          this.listComponent.reloadData();
        },
        error => console.log(error));
  }

  allocatePLane(hangars : Hangars): void{

    console.log("into edit");
    localStorage.setItem("id",hangars.id.toString());
    this.router.navigate(["manager/viewhangars/allocate"]);

  }

}
