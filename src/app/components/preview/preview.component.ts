import {Component} from '@angular/core';
import {DataStoreService} from "../../services/data-store/data-store.service";
import {AsyncPipe, JsonPipe} from "@angular/common";

@Component({
  selector: 'app-preview',
  standalone: true,
  imports: [
    AsyncPipe,
    JsonPipe
  ],
  templateUrl: './preview.component.html',
  styleUrl: './preview.component.css'
})
export class PreviewComponent {

  profile$ = this.store.data$;

  constructor(private store: DataStoreService) {
  }
}
