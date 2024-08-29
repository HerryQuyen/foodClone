import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  @Output() hideSidebarToggleChange = new EventEmitter<boolean>();


  onClosed() {
    this.hideSidebarToggleChange.emit(false);
  }
}
