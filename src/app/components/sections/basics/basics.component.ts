import {Component} from '@angular/core';
import {RouterLink} from "@angular/router";
import {DataStoreService} from "../../../services/data-store/data-store.service";
import {map} from "rxjs";
import {MatButton} from "@angular/material/button";
import {MatTab, MatTabGroup} from "@angular/material/tabs";
import {AsyncPipe, NgIf} from "@angular/common";
import {MatFormField, MatLabel, MatPrefix} from "@angular/material/form-field";
import {FormsModule} from "@angular/forms";
import {MatInput} from "@angular/material/input";
import {MatButtonToggle, MatButtonToggleGroup} from "@angular/material/button-toggle";
import {MatCheckbox} from "@angular/material/checkbox";
import {MatIcon} from "@angular/material/icon";
import {headers} from "../../../models/headers.data.model";

@Component({
  selector: 'app-basics',
  standalone: true,
  imports: [
    RouterLink,
    MatButton,
    MatTabGroup,
    MatTab,
    AsyncPipe,
    MatFormField,
    FormsModule,
    MatInput,
    MatLabel,
    NgIf,
    MatButtonToggleGroup,
    MatButtonToggle,
    MatCheckbox,
    MatPrefix,
    MatIcon
  ],
  templateUrl: './basics.component.html',
  styleUrl: './basics.component.css'
})
export class BasicsComponent {
  title = headers['basics'].title;

  basics$ = this.store.data$.pipe(
    map((data) => data.basics)
  );

  location$ = this.store.data$.pipe(
    map((data) => data.location)
  );

  web$ = this.store.data$.pipe(
    map((data) => data.web)
  );

  constructor(private store: DataStoreService) {
  }

}
