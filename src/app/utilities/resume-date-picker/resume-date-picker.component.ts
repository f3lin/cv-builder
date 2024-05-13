import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatDatepicker, MatDatepickerModule} from "@angular/material/datepicker";
import {FormControl, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import * as _moment from 'moment';
import {default as _rollupMoment, Moment} from 'moment';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from "@angular/material/core";
import {MAT_MOMENT_DATE_ADAPTER_OPTIONS, MomentDateAdapter} from "@angular/material-moment-adapter";
import {DateObject} from "../../models/profile.data.model";

const moment = _rollupMoment || _moment;

// See the Moment.js docs for the meaning of these formats:
// https://momentjs.com/docs/#/displaying/format/
export const DAY_MONTH_FORMATS = {
  parse: {
    dateInput: 'MM/YYYY',
  },
  display: {
    dateInput: 'MM/YYYY',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};


@Component({
  selector: 'app-resume-date-picker',
  standalone: true,
  providers: [
    // `MomentDateAdapter` can be automatically provided by importing `MomentDateModule` in your
    // application's root module. We provide it at the component level here, due to limitations of
    // our example generation script.
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS],
    },

    {provide: MAT_DATE_FORMATS, useValue: DAY_MONTH_FORMATS},
  ],
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  template: `
    <mat-form-field>
      <mat-label>Month and Year</mat-label>
      <input matInput
             [matDatepicker]="dp"
             [formControl]="formDate">
      <mat-hint>MM/YYYY</mat-hint>
      <mat-datepicker-toggle matIconSuffix [for]="dp"></mat-datepicker-toggle>
      <mat-datepicker #dp
                      startView="multi-year"
                      (monthSelected)="setMonthAndYear($event, dp)"
                      panelClass="example-month-picker">
      </mat-datepicker>
    </mat-form-field>
  `,
  styles: ``
})
export class ResumeDatePickerComponent implements OnInit {

  @Input() date!: DateObject
  @Output() dateEvent = new EventEmitter<DateObject>();

  formDate: FormControl = new FormControl(moment());

  ngOnInit() {
    const _moment = this.date ?
      moment([this.date.year, this.date.month - 1]) : moment();
    this.formDate.setValue(_moment,{onlySelf: true});
  }


  setMonthAndYear(normalizedMonthAndYear: Moment, dp: MatDatepicker<Moment>) {
    const ctrlValue = this.formDate.value!;
    ctrlValue.month(normalizedMonthAndYear.month());
    ctrlValue.year(normalizedMonthAndYear.year());
    this.formDate.setValue(ctrlValue);
    this.dateEvent.emit({year: normalizedMonthAndYear.year(), month: normalizedMonthAndYear.month() + 1, day: 1})
    dp.close();
  }
}
