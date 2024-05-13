import {Component} from '@angular/core';
import {MatButton} from "@angular/material/button";
import {MatTooltip} from "@angular/material/tooltip";
import {RouterLink} from "@angular/router";
import {map} from "rxjs";
import {DataStoreService} from "../../../services/data-store/data-store.service";
import {AsyncPipe} from "@angular/common";
import {
  MatAccordion,
  MatExpansionPanel,
  MatExpansionPanelActionRow,
  MatExpansionPanelHeader,
  MatExpansionPanelTitle
} from "@angular/material/expansion";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {FormControl, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {Certification, DateObject} from "../../../models/profile.data.model";
import {MatNativeDateModule, provideNativeDateAdapter} from "@angular/material/core";
import {MatDatepicker, MatDatepickerModule} from "@angular/material/datepicker";

import * as _moment from 'moment';
// tslint:disable-next-line:no-duplicate-imports
import {default as _rollupMoment} from 'moment';
import {ResumeDatePickerComponent} from "../../../utilities/resume-date-picker/resume-date-picker.component";

const moment = _rollupMoment || _moment;

@Component({
  selector: 'app-certifications',
  standalone: true,
  imports: [
    MatButton,
    MatTooltip,
    RouterLink,
    AsyncPipe,
    MatAccordion,
    MatExpansionPanel,
    MatExpansionPanelActionRow,
    MatExpansionPanelHeader,
    MatExpansionPanelTitle,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ResumeDatePickerComponent
  ],
  providers: [provideNativeDateAdapter()],
  templateUrl: './certifications.component.html',
  styleUrl: './certifications.component.css'
})
export class CertificationsComponent {
  step = 0;
  newDate: DateObject = {year:2024, month:1, day:1}

  // date = new FormControl(moment([2017, 0, 1]));

  certifications$ = this.store.data$.pipe(
    map((data) => data.certifications)
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

  addCertification() {
    let data = this.store.data;
    const newId = data.certifications.length >= 1 ? data.certifications.length : 0;
    data.certifications.push({
      id: newId,
      name: "",
      endDate: this.newDate
    })

    this.store.setData(data);
    this.step = newId;
  }

  deleteCertification(certification: Certification) {
    let data = this.store.data;
    const index = data.certifications.indexOf(certification);

    if (index !== -1 && certification.id == 0 ) {
      data.certifications.splice(index, 1);
      data.certifications.forEach(d => d.id = d.id - 1);
    }

    if (index !== -1 && certification.id != 0) {
      data.certifications.splice(index, 1);
      data.certifications.forEach(d => {
        if (d.id > certification.id) d.id = d.id - 1
      });
    }

    this.store.setData(data);
  }

  onDateChange(date: DateObject, certification: Certification) {
    let data = this.store.data;
    const index = data.certifications.indexOf(certification);
    if (index !== -1) data.certifications[index].endDate = date;
    this.store.setData(data);
  }
}
