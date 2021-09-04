import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Hangars } from '../hangars';
import { HangarsService } from '../_services/hangars.service';

@Component({
  selector: 'app-edit-hangars',
  templateUrl: './edit-hangars.component.html',
  styleUrls: ['./edit-hangars.component.css']
})
export class EditHangarsComponent implements OnInit {

  hangars: Hangars = new Hangars();

  constructor(private hangarsService: HangarsService, private router: Router) { }

  ngOnInit(): void {
    this.editHangars();
  }

  editHangars(){
    let id=localStorage.getItem("id");
    this.hangarsService.getHangars(+id)
    .subscribe(data=>{
      this.hangars=data;
    })
  }

  onUpdate(){
    console.log("into update");
    this.hangarsService.updateHangars(this.hangars)
          .subscribe(data => {
     console.log(data);
     this.router.navigate(["admin/viewhangars"]);
    }, error => console.log(error));
        this.hangars = new Hangars();
    }

}
