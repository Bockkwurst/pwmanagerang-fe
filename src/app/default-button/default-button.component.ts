import {Component, EventEmitter, Input, Output} from '@angular/core';
import {MatButton, MatButtonModule} from "@angular/material/button";

@Component({
  selector: 'app-default-button',
  standalone: true,
  imports: [
    MatButtonModule
  ],
  templateUrl: './default-button.component.html',
  styleUrl: './default-button.component.css'
})
export class DefaultButtonComponent {
  @Input() buttonText: string | undefined;
  @Input() buttonClass: string | undefined;
  @Output() buttonClick = new EventEmitter<void>();

  onClick() {
    this.buttonClick.emit();
  }
}
