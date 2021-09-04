import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Allocatedplanes } from '../allocatedplanes';
import { AllocatedplanesService } from '../_services/allocatedplanes.service';

@Component({
  selector: 'app-allocated-planes-list',
  templateUrl: './allocated-planes-list.component.html',
  styleUrls: ['./allocated-planes-list.component.css']
})
export class AllocatedPlanesListComponent implements OnInit {

  
  allocatedplanes: Observable<Allocatedplanes[]>;
  currentUser: any;
  p: Number = 1;
  count: Number = 2;

  constructor(private planesService: AllocatedplanesService) { }

  ngOnInit(): void {
    this.reloadData();
    
  }
  reloadData(){
    this.allocatedplanes = this.planesService.getAllocatedplanesList();
  }

}
