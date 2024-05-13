import { Component } from '@angular/core';
import {MatButton} from "@angular/material/button";
import {MatTooltip} from "@angular/material/tooltip";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-skills-and-expertise',
  standalone: true,
    imports: [
        MatButton,
        MatTooltip,
        RouterLink
    ],
  templateUrl: './skills-and-expertise.component.html',
  styleUrl: './skills-and-expertise.component.css'
})
export class SkillsAndExpertiseComponent {

  addTraining() {

  }
}
