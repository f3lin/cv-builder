import { Component } from '@angular/core';
import {MatButton} from "@angular/material/button";
import {MatTooltip} from "@angular/material/tooltip";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-educations',
  standalone: true,
    imports: [
        MatButton,
        MatTooltip,
        RouterLink
    ],
  templateUrl: './educations.component.html',
  styleUrl: './educations.component.css'
})
export class EducationsComponent {

  addTraining() {

  }
}
