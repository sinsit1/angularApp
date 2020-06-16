import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../../services/settings/settings.service';

@Component({
  selector: 'app-account-settings', templateUrl: './account-settings.component.html', styleUrls: ['./account-settings.component.scss']
})
export class AccountSettingsComponent implements OnInit {

  constructor(public _adjustments: SettingsService) { }

  ngOnInit(): void {
    this.setCheck();
  }

  changeColor(color: string, link: any) {
    this.applyCheck(link);
    this._adjustments.setTheme(color);
    this._adjustments.setAdjustments();
  }

  applyCheck(link: any) {
    let selectors: any = document.getElementsByClassName('selector');

    for (let ref of selectors) {
      ref.classList.remove('working');
    }
    link.classList.add('working');
  }

  setCheck() {
    let selectors: any = document.getElementsByClassName('selector');

    for (let ref of selectors) {
      if (ref.getAttribute('data-theme') === this._adjustments.adjustments.theme) {
        ref.classList.add('working');
        break;
      }
    }
  }

}
