import { Component, OnInit } from '@angular/core';

import { LanguageService } from './core/services/language.service';
import { PopUpService } from './shared/services/pop-up.service';
import { PopupModel } from './shared/models/popupModel';
import { ThisReceiver } from '@angular/compiler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'etiya-5-telco-frontend';
constructor(private popUpService: PopUpService,private languageService:LanguageService) {}

popUpModel:PopupModel = {isOpen:true, title:'Warning!',description:'Are you sure to delete this customer ?',icon:'fa-sharp fa-solid fa-circle-exclamation',
leftButtonText:'Cancel',rightButtonText:'Delete'}
show:boolean = false;

runPopUp() {
this.popUpService.startPopUp(this.popUpModel)
this.showPopUp()
}

changeLanguage(code:string){
  this.languageService.setLanguage(code);
}

showPopUp() {
  this.popUpService.isPopUp.subscribe((response)=> {
  this.show = response.isOpen;

//  isOpen = this.popUp1
 console.log(response);
  })
  }
}
