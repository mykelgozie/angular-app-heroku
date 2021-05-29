import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navtop',
  templateUrl: './navtop.component.html',
  styleUrls: ['./navtop.component.css']
})
export class NavtopComponent implements OnInit {

  check = false;
  display = "";

  constructor() { }

  ngOnInit(): void {
  }

  changeNav(){

   this. check = !this.check;
    if(this.check){
        this.display  = "display";
    } else {

      this.display = "";
    }
    

    console.log(this.check);
  }

}
