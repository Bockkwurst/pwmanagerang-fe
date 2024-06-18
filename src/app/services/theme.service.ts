import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private darkModeActive: boolean;

  constructor() {
    this.darkModeActive = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode){
      this.darkModeActive = savedMode === 'true';
    }
    this.applyTheme();
  }
  toggleDarkMode(){
    this.darkModeActive = !this.darkModeActive;
    localStorage.setItem('darkMode', String(this.darkModeActive));
    this.applyTheme();
  }
  private applyTheme(){
    document.body.classList.toggle('dark', this.darkModeActive);
  }
}
