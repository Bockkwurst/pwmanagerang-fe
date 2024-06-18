import { Component } from '@angular/core';
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-landing-head',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './landing-head.component.html',
  styleUrl: './landing-head.component.css'
})
export class LandingHeadComponent {

}
