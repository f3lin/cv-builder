import {Component} from '@angular/core';
import {DataStoreService} from "../../../services/data-store/data-store.service";
import {AsyncPipe} from "@angular/common";
import {map} from "rxjs";
import {MatButton} from "@angular/material/button";
import {RouterLink} from "@angular/router";
import {MatIcon} from "@angular/material/icon";
import {Training} from "../../../models/profile.data.model";
import {
  MatAccordion,
  MatExpansionPanel,
  MatExpansionPanelActionRow,
  MatExpansionPanelDescription,
  MatExpansionPanelHeader,
  MatExpansionPanelTitle
} from "@angular/material/expansion";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {FormsModule} from "@angular/forms";
import {MatTooltip} from "@angular/material/tooltip";

@Component({
  selector: 'app-trainings',
  standalone: true,
  imports: [
    MatButton,
    RouterLink,
    MatIcon,
    AsyncPipe,
    MatAccordion,
    MatExpansionPanel,
    MatExpansionPanelTitle,
    MatExpansionPanelDescription,
    MatExpansionPanelHeader,
    MatExpansionPanelActionRow,
    MatFormField,
    MatInput,
    MatLabel,
    FormsModule,
    MatTooltip
  ],
  templateUrl: './trainings.component.html',
  styleUrl: './trainings.component.css'
})
export class TrainingsComponent {
  step = 0;

  trainings$ = this.store.data$.pipe(
    map((data) => data.trainings)
  );

  constructor(private store: DataStoreService) {
  }

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

  deleteTraining(training: Training) {
    let data = this.store.data;
    const index = data.trainings.indexOf(training);

    if (index !== -1 && training.id == 0) {
      data.trainings.splice(index, 1);
      data.trainings.forEach(d => d.id = d.id - 1);
      this.store.setData(data);
    }

    if (index !== -1 && training.id != 0) {
      data.trainings.splice(index, 1);
      data.trainings.forEach(d => {
        if (d.id > training.id) d.id = d.id - 1
      });
      this.store.setData(data);
    }
  }

  addTraining() {
    let data = this.store.data;
    const newId = data.trainings.length >= 1 ? data.trainings.length : 0;
    data.trainings.push({
      id: newId,
      title: "",
      platform: ""
    })

    this.store.setData(data);
    this.step = newId;
  }
}
