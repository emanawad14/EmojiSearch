import { Component } from '@angular/core';

@Component({
  selector: 'app-themppicker',
  imports: [],
  templateUrl: './themppicker.component.html',
  styleUrl: './themppicker.component.scss'
})
export class ThemppickerComponent {
  setTheme(theme: 'light' | 'dark') {
    if (theme === 'dark') {
      document.body.classList.remove('light-theme');
    } else {
      document.body.classList.add('light-theme');
    }
  }

}
