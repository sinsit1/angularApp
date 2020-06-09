import { Component, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styleUrls: ['./account-settings.component.scss']
})
export class AccountSettingsComponent implements OnInit {

  constructor(@Inject(DOCUMENT) private _document) { }

  ngOnInit(): void {
  }

  changeColor(color: string, link: any) {
    let url = `assets/css/colors/${color}.css`;
    this._document.getElementById('theme').setAttribute('href', url);
  }

  applyCheck(){

  }

}
