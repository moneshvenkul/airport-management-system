import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Unallocatedplanes } from '../unallocatedplanes';
import { UnallocatedplanesService } from '../_services/unallocatedplanes.service';

@Component({
  selector: 'app-unallocated-planes-list',
  templateUrl: './unallocated-planes-list.component.html',
  styleUrls: ['./unallocated-planes-list.component.css']
})
export class UnallocatedPlanesListComponent implements OnInit {

  unallocatedplanes: Observable<Unallocatedplanes[]>;
  currentUser: any;
  p: Number = 1;
  count: Number = 2;

  constructor(private unallocatedplanesService: UnallocatedplanesService) { }

  ngOnInit(): void {
    this.reloadData();
  }
  reloadData(){
    this.unallocatedplanes = this.unallocatedplanesService.getUnallocatedplanesList();
  }

}
