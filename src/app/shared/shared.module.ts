import {NgModule} from '@angular/core';
import {BreadcrumbsComponent} from './breadcrumbs/breadcrumbs.component';
import {HeaderComponent} from './header/header.component';
import {NofoundpageComponent} from './nofoundpage/nofoundpage.component';
import {SidenavComponent} from './sidenav/sidenav.component';

@NgModule({
  declarations: [
  BreadcrumbsComponent,
    HeaderComponent,
    NofoundpageComponent,
    SidenavComponent
  ],
  exports: [
    BreadcrumbsComponent,
    HeaderComponent,
    NofoundpageComponent,
    SidenavComponent
  ]
})

export class SharedModule {}
