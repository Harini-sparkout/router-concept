import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products',
  imports: [],
  templateUrl: './products.html',
  styleUrls: ['./products.css'], 
})
export class Products implements OnInit {

  private route = inject(ActivatedRoute);

  userId = '';

  ngOnInit(): void {
    // [snapshot] read the param at once
    const param = this.route.snapshot.paramMap.get('new value');
    this.userId = param || '-';
    console.log('Activated route value (snapshot):', this.userId);
  }
}