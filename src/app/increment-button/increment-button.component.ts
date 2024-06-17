import { Component } from '@angular/core';

@Component({
  selector: 'app-increment-button',
  standalone: true,
  imports: [],
  templateUrl: './increment-button.component.html',
  styleUrl: './increment-button.component.css'
})
export class IncrementButtonComponent {
  compteur: number = 0;

  decrement() {
    this.compteur--;
  }
  increment() {
    this.compteur++;
  }
}
