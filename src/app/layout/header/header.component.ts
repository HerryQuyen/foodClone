import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  @Output() isOpenSidebarChange = new EventEmitter<boolean>();
  
  onToggleSidebar() {
    this.isOpenSidebarChange.emit(true);
  }
}
