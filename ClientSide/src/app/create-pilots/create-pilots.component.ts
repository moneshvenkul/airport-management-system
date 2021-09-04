import { Component, OnInit } from '@angular/core';
import {Pilots } from '../pilots';
import { PilotsService } from '../_services/pilots.service';

@Component({
  selector: 'app-create-pilots',
  templateUrl: './create-pilots.component.html',
  styleUrls: ['./create-pilots.component.css']
})
export class CreatePilotsComponent implements OnInit {

  pilots: Pilots=new Pilots();
  submitted=false;

  constructor(private pilotsService : PilotsService) { }

  ngOnInit(): void {
  }

  newPilots():void{ 
    this.submitted=false;
    this.pilots=new Pilots(); 
  }
 
  save(){
    this.pilotsService.createPilots(this.pilots) 
    .subscribe(
      data =>{
        console.log(data);
        this.submitted=true;
      },
      error => console.log(error));
      this.pilots=new Pilots();
  }
 
  onSubmit(){
    this.save();
  }

}
