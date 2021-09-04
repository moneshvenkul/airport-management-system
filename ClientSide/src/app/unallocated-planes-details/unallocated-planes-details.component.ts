import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UnallocatedPlanesListComponent } from '../unallocated-planes-list/unallocated-planes-list.component';
import { Unallocatedplanes } from '../unallocatedplanes';
import { UnallocatedplanesService } from '../_services/unallocatedplanes.service';

@Component({
  selector: 'app-unallocated-planes-details',
  templateUrl: './unallocated-planes-details.component.html',
  styleUrls: ['./unallocated-planes-details.component.css']
})
export class UnallocatedPlanesDetailsComponent implements OnInit {

  @Input() unallocatedplanes: Unallocatedplanes;
  togglemanager :boolean=true;

  constructor(private router: Router,private unallocatedplanesService: UnallocatedplanesService, private listComponent: UnallocatedPlanesListComponent) { }
  
  ngOnInit(): void {
    
  }

  toggleManager(){
    this.togglemanager=!this.togglemanager;
  }

}
