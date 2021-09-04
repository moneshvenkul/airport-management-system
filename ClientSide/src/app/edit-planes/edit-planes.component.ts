import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Planes } from '../planes';
import { PlanesService } from '../_services/planes.service';

@Component({
  selector: 'app-edit-planes',
  templateUrl: './edit-planes.component.html',
  styleUrls: ['./edit-planes.component.css']
})
export class EditPlanesComponent implements OnInit {

  planes: Planes = new Planes();

  constructor(private planesService: PlanesService, private router: Router) { }

  ngOnInit(): void {
    this.editPlanes();
  }

  editPlanes(){
    let id=localStorage.getItem("id");
    this.planesService.getPlanes(+id)
    .subscribe(data=>{
      this.planes=data;
    })
  }

  onUpdate(){
    console.log("into update");
    this.planesService.updatePlanes(this.planes)
          .subscribe(data => {
     console.log(data);
     this.router.navigate(["admin/viewplanes"]);
    }, error => console.log(error));
        this.planes = new Planes();
    }

}
