import {Component} from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {JwtInterceptor} from "./services/jwt-interceptor.service";
import {HomeComponent} from "./home/home.component";
import {NavbarComponent} from "./navbar/navbar.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    HomeComponent,
    NavbarComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true}
  ]
})
export class AppComponent {
  title = 'PW-Vault';

}
