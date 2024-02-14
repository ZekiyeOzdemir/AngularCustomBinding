import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {
  @Input() all: number = 0; 
  @Input() free: number = 0;
  @Input() premium: number = 0;

  selectedRadioButtonValue: string = 'All'; 
  
  @Output() //this event above will emit the value of the radio button when its raised
  filterRadioButtonSelectionChanged: EventEmitter<string> = new EventEmitter<string>(); //to create a property and event we use EventEmitter class, this means this metod gonna be an event
  onRadioButtonSelectionChanged() {
    this.filterRadioButtonSelectionChanged.emit(this.selectedRadioButtonValue);
    //console.log(this.selectedRadioButtonValue);
  }
}
 