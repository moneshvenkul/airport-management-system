import { Component, OnInit } from '@angular/core';
import {Hangars } from '../hangars';
import { HangarsService } from '../_services/hangars.service';

@Component({
  selector: 'app-create-hangar',
  templateUrl: './create-hangar.component.html',
  styleUrls: ['./create-hangar.component.css']
})
export class CreateHangarComponent implements OnInit {

  hangars: Hangars=new Hangars();
  submitted=false;

  constructor(private hangarsService : HangarsService) { }

  ngOnInit(): void {
  }

  newHangars():void{ 
    this.submitted=false;
    this.hangars=new Hangars(); 
  }
 
  save(){
    this.hangarsService.createHangars(this.hangars) 
    .subscribe(
      data =>{
        console.log(data);
        this.submitted=true;
      },
      error => console.log(error));
      this.hangars=new Hangars();
  }
 
  onSubmit(){
    this.save();
  }

}
