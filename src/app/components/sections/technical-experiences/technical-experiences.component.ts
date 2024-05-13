import { Component } from '@angular/core';
import {MatButton} from "@angular/material/button";
import {MatTooltip} from "@angular/material/tooltip";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-technical-experiences',
  standalone: true,
    imports: [
        MatButton,
        MatTooltip,
        RouterLink
    ],
  templateUrl: './technical-experiences.component.html',
  styleUrl: './technical-experiences.component.css'
})
export class TechnicalExperiencesComponent {

  addTraining() {

  }
}
