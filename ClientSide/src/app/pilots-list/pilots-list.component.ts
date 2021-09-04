import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Pilots } from '../pilots';
import { PilotsService } from '../_services/pilots.service';
import { TokenStorageService } from '../_services/token-storage.service';

@Component({
  selector: 'app-pilots-list',
  templateUrl: './pilots-list.component.html',
  styleUrls: ['./pilots-list.component.css']
})
export class PilotsListComponent implements OnInit {
  pilots: Observable<Pilots[]>;
  currentUser: any;
  p: Number = 1;
  count: Number = 2;

  constructor(private pilotsService: PilotsService,private token: TokenStorageService) { }

  ngOnInit(): void {
    this.reloadData();
    this.currentUser = this.token.getUser();
  }

  reloadData(){
    this.pilots = this.pilotsService.getPilotsList();
  }

  deletePilots() {
    this.pilotsService.deleteAll()
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log('ERROR: ' + error));
  }

}
