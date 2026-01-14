import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  templateUrl: './search-bar.html',
  styleUrls: ['./search-bar.css']
})
export class SearchBarComponent {
  @Output() searchByTitle = new EventEmitter<string>();
  @Output() searchByYear = new EventEmitter<number>();

  onTitleInput(value: string) {
    this.searchByTitle.emit(value.trim());
  }

  onYearInput(value: string) {
    const year = parseInt(value, 10);
    if (!isNaN(year)) {
      this.searchByYear.emit(year);
    }
  }
}
