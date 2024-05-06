import { Component } from '@angular/core';
import {MatButton} from "@angular/material/button";
import {RouterLink} from "@angular/router";
import {map} from "rxjs";
import {DataStoreService} from "../../../services/data-store/data-store.service";
import {MatTooltip} from "@angular/material/tooltip";
import {AsyncPipe} from "@angular/common";
import {
  MatAccordion,
  MatExpansionPanel,
  MatExpansionPanelActionRow,
  MatExpansionPanelHeader, MatExpansionPanelTitle
} from "@angular/material/expansion";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {LanguageLevel} from "../../../models/language-level";
import {MatOption, MatSelect} from "@angular/material/select";
import {Language} from "../../../models/profile.data.model";

@Component({
  selector: 'app-languages',
  standalone: true,
  imports: [
    MatButton,
    RouterLink,
    MatTooltip,
    AsyncPipe,
    MatAccordion,
    MatExpansionPanel,
    MatExpansionPanelActionRow,
    MatExpansionPanelHeader,
    MatExpansionPanelTitle,
    MatFormField,
    MatInput,
    MatLabel,
    ReactiveFormsModule,
    FormsModule,
    MatSelect,
    MatOption
  ],
  templateUrl: './languages.component.html',
  styleUrl: './languages.component.css'
})
export class LanguagesComponent {
  step = 0;

  languageLevels = Object.values(LanguageLevel)

  languages$ = this.store.data$.pipe(
    map((data) => data.languages)
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


  addLanguage() {
    let data = this.store.data;
    const newId = data.languages.length >= 1 ? data.languages.length : 0;
    data.languages.push({
      id: newId,
      name: "",
      level: this.languageLevels[0]
    })

    this.store.setData(data);
    this.step = newId;
  }

  deleteLanguage(language: Language) {
    let data = this.store.data;
    const index = data.languages.indexOf(language);

    if (index !== -1 && language.id == 0) {
      data.languages.splice(index, 1);
      data.languages.forEach(d => d.id = d.id - 1);
      this.store.setData(data);
    }

    if (index !== -1 && language.id != 0) {
      data.languages.splice(index, 1);
      data.languages.forEach(d => {
        if (d.id > language.id) d.id = d.id - 1
      });
      this.store.setData(data);
    }
  }
}
