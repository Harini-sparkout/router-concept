import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-address',
  standalone: true, 
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './address.html',
  styleUrls: ['./address.css'], 
})
export class Address {

  @Input() address!: FormGroup;

  // emits event to parent
  @Output() removeAddress: EventEmitter<FormGroup> = new EventEmitter();

  remove() {
    this.removeAddress.emit(this.address);
  }
}