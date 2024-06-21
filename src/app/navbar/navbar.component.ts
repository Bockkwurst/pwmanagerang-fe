import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from "@angular/router";
import {MatIconButton, MatMiniFabButton} from "@angular/material/button";
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    RouterLink,
    RouterOutlet,
    MatMiniFabButton,
    MatIconButton,
    NgClass
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
