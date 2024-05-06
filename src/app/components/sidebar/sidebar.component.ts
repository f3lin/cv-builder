import {Component} from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from "@angular/router";
import {MatListItem, MatNavList} from "@angular/material/list";
import {headers} from "../../models/headers.data.model";
import {MatIcon} from "@angular/material/icon";

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    RouterOutlet,
    MatListItem,
    RouterLink,
    MatNavList,
    RouterLinkActive,
    MatIcon
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  sortedHeaders: string[];
  protected readonly headers = headers;

  constructor() {
    // Sort the keys of the headers object based on the length of their associated titles
    this.sortedHeaders = Object.keys(headers)
      .sort((a, b) => headers[a].title.length - headers[b].title.length);
  }
}
