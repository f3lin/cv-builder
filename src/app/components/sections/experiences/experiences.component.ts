import { Component } from '@angular/core';
import {MatButton} from "@angular/material/button";
import {MatTooltip} from "@angular/material/tooltip";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-experiences',
  standalone: true,
    imports: [
        MatButton,
        MatTooltip,
        RouterLink
    ],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.css'
})
export class ExperiencesComponent {

  addTraining() {

  }
}
