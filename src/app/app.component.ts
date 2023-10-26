import { Component, ViewChild } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';
import { NavbarComponent } from './components/navbar/navbar.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @ViewChild('drawer') drawer: any;
  constructor(private deviceService: DeviceDetectorService) {}
  public get isMobile() {
    return this.deviceService.isMobile();
  }
  closeDropdown() {
    // Chiudi il dropdown
    if (this.deviceService.isMobile()) {
      this.toggleNavbar();
      console.log('ciao');
    }
  }

  private toggleNavbar() {
    const navbarToggler = document.querySelector(
      '.navbar-toggler'
    ) as HTMLElement;
    navbarToggler.click();
  }
  title = 'portfolio';
}
