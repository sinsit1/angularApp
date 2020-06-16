import { Inject, Injectable } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  adjustments: Adjustments = {
    urlTheme: 'assets/css/colors/default.css', theme: 'default'
  };

  constructor(@Inject(DOCUMENT) private _document) {
    this.getAdjustments();
  }

  setAdjustments() {
    localStorage.setItem('adjustments', JSON.stringify(this.adjustments));
  }

  getAdjustments() {
    if (localStorage.getItem('adjustments')) {
      this.adjustments = JSON.parse(localStorage.getItem('adjustments'));
      this.setTheme(this.adjustments.theme);
    }
  }

  setTheme(theme: string) {
    console.log(theme)
    let url = `assets/css/colors/${theme}.css`;
    this._document.getElementById('theme').setAttribute('href', url);
    this.adjustments.theme = theme;
    this.adjustments.urlTheme = url;
  }
}

interface Adjustments {
  urlTheme: string;
  theme: string;
}
