import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Planes } from '../planes';
import { PlanesService } from '../_services/planes.service';
import { TokenStorageService } from '../_services/token-storage.service';

@Component({
  selector: 'app-planes-list',
  templateUrl: './planes-list.component.html',
  styleUrls: ['./planes-list.component.css']
})
export class PlanesListComponent implements OnInit {

  planes: Observable<Planes[]>;
  currentUser: any;
  p: Number = 1;
  count: Number = 2;

  constructor(private planesService: PlanesService,private token: TokenStorageService) { }

  ngOnInit(): void {
    this.reloadData();
    this.currentUser = this.token.getUser();
  }
  reloadData(){
    this.planes = this.planesService.getPlanesList();
  }

  deletePlanes() {
    this.planesService.deleteAll()
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log('ERROR: ' + error));
  }

}
