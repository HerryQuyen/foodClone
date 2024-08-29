import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../layout/header/header.component';
import { FooterComponent } from '../layout/footer/footer.component';
import { ContentComponent } from '../components/content/content.component';
import { SidebarComponent } from '../components/sidebar/sidebar.component';
import { animate, style, transition, trigger } from '@angular/animations';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    SidebarComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  animations: [
    // trigger('slideInOut', [
    //   transition(':enter', [
    //     style({ marginLeft: '-100%' }),
    //     animate('200ms', style({ marginLeft: '0px' })),
    //   ]),
    //   transition(':leave', [
    //     animate('200ms', style({ marginLeft: '-100%' })),
    //   ]),
    // ]),
  ],
})
export class HomeComponent {
  isOpenSidebar: boolean = false;

  handleEventOpenSidebar(event: any) {
    this.isOpenSidebar = event;
    console.log('open', event);
    //this.handleOpenCloseSidebar();
  }

  handleEventClosedSlideBar(event: any) {
    this.isOpenSidebar = event;
    console.log('close', event);
    //this.handleOpenCloseSidebar();
  }

  handleOpenCloseSidebar() {
    const sidebar = document.getElementById('mySidebar');
    if (sidebar) {
      sidebar.style.display = this.isOpenSidebar
        ? 'none'
        : 'block';
    }
  }
}
