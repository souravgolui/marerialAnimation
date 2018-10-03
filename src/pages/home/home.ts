import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DashPage } from '../dash/dash';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  is_ligin_txt = true;
  loading= false;
  centerPos = false;
  fullScr = false;
  LoginTxt = 'Login';
  constructor(public navCtrl: NavController) {

  }


  login() {
    this.LoginTxt = '';
    if(!this.fullScr) {
      this.loading= true;
    }
    setTimeout(() => {
      if(!this.fullScr) {
        this.is_ligin_txt = false;
      }
    }, 200);


    setTimeout(() => {
      if(!this.fullScr) {
        this.centerPos = true;
      }
    }, 2000);

    setTimeout(() => {
      this.fullScr = true;
      this.is_ligin_txt = true;
      this.LoginTxt = '';
    }, 2200);

    setTimeout(() => {
      this.navCtrl.setRoot(DashPage);
    }, 3500);

  }

}
