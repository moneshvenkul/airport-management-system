import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pilots } from '../pilots';
import { PilotsService } from '../_services/pilots.service';

@Component({
  selector: 'app-edit-pilots',
  templateUrl: './edit-pilots.component.html',
  styleUrls: ['./edit-pilots.component.css']
})
export class EditPilotsComponent implements OnInit {
  pilots: Pilots = new Pilots();

  constructor(private pilotsService: PilotsService, private router: Router) { }

  ngOnInit(): void {
    this.editPilots();
  }

  editPilots(){
    let id=localStorage.getItem("id");
    this.pilotsService.getPilots(+id)
    .subscribe(data=>{
      this.pilots=data;
    })
  }

  onUpdate(){
    console.log("into update");
    this.pilotsService.updatePilots(this.pilots)
          .subscribe(data => {
     console.log(data);
     this.router.navigate(["admin/viewpilots"]);
    }, error => console.log(error));
        this.pilots = new Pilots();
    }

}
