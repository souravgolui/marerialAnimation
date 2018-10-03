import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-dash',
  templateUrl: 'dash.html'
})
export class DashPage implements OnInit{
  small = false;
  bottomPos = false;
  constructor(public navCtrl: NavController) {

  }


  ngOnInit(){
    setTimeout(() => {
        this.small = true;
    }, 200);

    setTimeout(() => {
        this.bottomPos = true;
    }, 300);
  }
}
