import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IncrementButtonComponent } from './increment-button/increment-button.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, IncrementButtonComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-test2';
}



