import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DeveloperComponent } from './developer/developer.component';
import { Skill } from './models/skil.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DeveloperComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'input_challenge';

  skills: Skill[] = [];
}
