import { Component } from '@angular/core';
import { AuthService } from './../../services/authService';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(public authService : AuthService) {}

}
