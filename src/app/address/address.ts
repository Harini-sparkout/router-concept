import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-address',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './address.html',
  styleUrl: './address.css',
})
export class Address {
           @Input() address!: FormGroup;              

           //emits event to parents 
  @Output() removeAddress: EventEmitter<FormGroup> = new EventEmitter();
//child know parent to remove address
 remove() {
  this.removeAddress.emit(this.address);
}
}
