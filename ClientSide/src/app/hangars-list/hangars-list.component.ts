import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Hangars } from '../hangars';
import { HangarsService } from '../_services/hangars.service';
import { TokenStorageService } from '../_services/token-storage.service';

@Component({
  selector: 'app-hangars-list',
  templateUrl: './hangars-list.component.html',
  styleUrls: ['./hangars-list.component.css']
})
export class HangarsListComponent implements OnInit {
  hangars: Observable<Hangars[]>;
  currentUser: any;

  p: Number = 1;
  count: Number = 2;



constructor(private hangarsService: HangarsService,private token: TokenStorageService) { }

  ngOnInit(): void {
    this.reloadData();
    this.currentUser = this.token.getUser();
  }

  reloadData(){
    this.hangars = this.hangarsService.getHangarsList();
  }

  deleteHangars() {
    this.hangarsService.deleteAll()
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log('ERROR: ' + error));
  }

}
