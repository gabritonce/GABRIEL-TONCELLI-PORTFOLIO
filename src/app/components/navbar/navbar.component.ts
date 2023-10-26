import { Component } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { DeviceDetectorService } from 'ngx-device-detector';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  constructor(
    private deviceService: DeviceDetectorService,
    private appcComponent: AppComponent
  ) {}

  closeDropdown() {
    // Chiudi il dropdown
    if (this.deviceService.isMobile()) {
      this.toggleNavbar();
      console.log('ciao');
    }
  }

  openDrawer() {
    this.appcComponent.drawer.toggle();
  }

  private toggleNavbar() {
    const navbarToggler = document.querySelector(
      '.navbar-toggler'
    ) as HTMLElement;
    navbarToggler.click();
  }
}
