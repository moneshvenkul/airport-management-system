import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AllocatedPlanesListComponent } from '../allocated-planes-list/allocated-planes-list.component';
import { Allocatedplanes } from '../allocatedplanes';
import { AllocatedplanesService } from '../_services/allocatedplanes.service';

@Component({
  selector: 'app-allocated-planes-details',
  templateUrl: './allocated-planes-details.component.html',
  styleUrls: ['./allocated-planes-details.component.css']
})
export class AllocatedPlanesDetailsComponent implements OnInit {

  @Input() allocatedplanes: Allocatedplanes;
  currentUser: any;
  togglemanager :boolean=true;

  constructor(private router: Router,private allocatedplanesService: AllocatedplanesService, private listComponent: AllocatedPlanesListComponent) { }
  
  ngOnInit(): void {
    
  }

  toggleManager(){
    this.togglemanager=!this.togglemanager;
  }

}
