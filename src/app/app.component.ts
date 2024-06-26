import {Component} from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';

import {HomeComponent} from "./home/home.component";
import {NavbarComponent} from "./navbar/navbar.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    HomeComponent,
    NavbarComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PW-Vault';
}
