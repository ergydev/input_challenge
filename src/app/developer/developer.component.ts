import { Component, Input } from '@angular/core';
import { Developper } from '../models/developer.model';
import { NgFor } from '@angular/common';
import { Skill } from '../models/skil.model';
import { SkillComponent } from '../skill/skill.component';

@Component({
  selector: 'app-developer',
  standalone: true,
  imports: [NgFor, SkillComponent],
  templateUrl: './developer.component.html',
  styleUrl: './developer.component.css'
})
export class DeveloperComponent {
  devSkills: Skill[] = [
    {
      name: 'Angular JS',
      logo: 'https://angular.io/assets/images/logos/angular/angular.svg',
      site: 'https://angular.io/'
    },
    {
      name: 'React JS',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
      site: 'https://reactjs.org/'
    },
    {
      name: 'Vue JS',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg',
      site: 'https://vuejs.org/'
    }
  ]

  infos: Developper = {
    lastname: 'Dushane',
    firstname: 'Eliot',
    age: 28,
    gender: 'male',
    bio: 'A Senior Fullstack Developer ',
    skills: this.devSkills,
  }
}
