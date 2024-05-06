import {Component, OnDestroy, OnInit} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {NavbarComponent} from "./components/navbar/navbar.component";
import {MatDrawer, MatDrawerContainer, MatDrawerContent} from "@angular/material/sidenav";
import {SidebarComponent} from "./components/sidebar/sidebar.component";
import {DataStoreService} from "./services/data-store/data-store.service";
import {catchError, of, Subject, takeUntil} from "rxjs";
import {HttpErrorResponse} from "@angular/common/http";
import {DataService} from "./services/http-data/data.service";
import {PreviewComponent} from "./components/preview/preview.component";
import {MatIconRegistry} from "@angular/material/icon";
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, MatDrawerContainer, MatDrawer, MatDrawerContent, SidebarComponent, PreviewComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'cv-builder';
  public unsubscribe$: Subject<void> = new Subject<void>();

  constructor(private datasource: DataService,
              private store: DataStoreService,
              private matIconRegistry: MatIconRegistry,
              private domSanitizer: DomSanitizer
  ) {
    this.addSvgIcons(['github-fill', 'global-fill', 'linkedin-box-fill', 'twitter-fill']);
  }


  ngOnInit(): void {
    this.loadUserData();
  }

  loadUserData() {
    this.datasource.getProfile()
      .pipe(
        takeUntil(this.unsubscribe$),
        catchError((error: HttpErrorResponse) => {
          console.error('Error fetching user data:', error);
          return of('An error occurred while fetching user data.');
        })
      )
      .subscribe((data) => {
        if (typeof data != 'string') {
          this.store.setData(data);
        }
      });
  }

  ngOnDestroy(): void {
  }

  // TODO: this approach must be changed after, something happens in this methode
  addSvgIcons(svgs: string[]) {
    for (const svg of svgs) {
      this.matIconRegistry.addSvgIcon(svg, this.domSanitizer
        .bypassSecurityTrustResourceUrl("../assets/svgs/" + svg + ".svg"));
    }
  }
}
