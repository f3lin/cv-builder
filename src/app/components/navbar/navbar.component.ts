import {Component} from '@angular/core';
import {MatToolbar} from "@angular/material/toolbar";
import {MatButton, MatFabButton, MatIconButton} from "@angular/material/button";
import {MatMenu, MatMenuItem, MatMenuTrigger} from "@angular/material/menu";
import {MatTooltip} from "@angular/material/tooltip";
import {MatIcon} from "@angular/material/icon";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    MatToolbar,
    MatFabButton,
    MatMenuTrigger,
    MatMenu,
    MatTooltip,
    MatMenuItem,
    MatIconButton,
    MatIcon,
    MatButton
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

}
