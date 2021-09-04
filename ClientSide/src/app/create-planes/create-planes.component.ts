import { Component, OnInit } from '@angular/core';
import {Planes } from '../planes';
import { PlanesService } from '../_services/planes.service';

@Component({
  selector: 'app-create-planes',
  templateUrl: './create-planes.component.html',
  styleUrls: ['./create-planes.component.css']
})
export class CreatePlanesComponent implements OnInit {

  planes: Planes=new Planes();
  submitted=false;

  constructor(private planesService : PlanesService) { }

  ngOnInit(): void {
  }

  newPlanes():void{ 
    this.submitted=false;
    this.planes=new Planes(); 
  }
 
  save(){
    this.planesService.createPlanes(this.planes) 
    .subscribe(
      data =>{
        console.log(data);
        this.submitted=true;
      },
      error => console.log(error));
      this.planes=new Planes();
  }
 
  onSubmit(){
    this.save();
  }

}
