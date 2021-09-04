import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Planes } from '../planes';
import { PlanesListComponent } from '../planes-list/planes-list.component';
import { PlanesService } from '../_services/planes.service';
import { TokenStorageService } from '../_services/token-storage.service';

@Component({
  selector: 'app-planes-details',
  templateUrl: './planes-details.component.html',
  styleUrls: ['./planes-details.component.css']
})
export class PlanesDetailsComponent implements OnInit {
  @Input() planes: Planes;
  currentUser: any;
  togglemanager :boolean=true;

  constructor(private router: Router,private planesService: PlanesService,private token: TokenStorageService, private listComponent: PlanesListComponent) { }
  
  ngOnInit(): void {
    this.currentUser = this.token.getUser();
  }

  toggleManager(){
    this.togglemanager=!this.togglemanager;
  }

  editPlanes(planes: Planes): void{
    console.log("into edit");
    localStorage.setItem("id",planes.id.toString());
    this.router.navigate(["admin/viewplanes/edit"]);
  }

  deletePlanes() {
    this.planesService.deletePlanes(this.planes.id)
      .subscribe(
        data => {
          console.log(data);
          this.listComponent.reloadData();
        },
        error => console.log(error));
  }

}
