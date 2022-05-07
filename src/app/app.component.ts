import { Component } from '@angular/core';
import { CounterService } from './services/counter.service';
import { ThemeService } from './services/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  isDarkMode: boolean;
  showFiller = false;

  constructor(private themeService: ThemeService, public counterService: CounterService) {
    this.themeService.initTheme();
    this.isDarkMode = this.themeService.isDarkMode();
  }

  toggleDarkMode() {
    this.isDarkMode = this.themeService.isDarkMode();

    console.log(localStorage.getItem('user-theme'));

    this.isDarkMode
      ? this.themeService.update('light-theme')
      : this.themeService.update('dark-theme');
  }
}
