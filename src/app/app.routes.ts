import {Routes} from '@angular/router';
import {SidebarComponent} from "./components/sidebar/sidebar.component";
import {BasicsComponent} from "./components/sections/basics/basics.component";
import {TrainingsComponent} from "./components/sections/trainings/trainings.component";
import {EducationsComponent} from "./components/sections/educations/educations.component";
import {LanguagesComponent} from "./components/sections/languages/languages.component";
import {ExperiencesComponent} from "./components/sections/experiences/experiences.component";
import {CertificationsComponent} from "./components/sections/certifications/certifications.component";
import {
  TechnicalExperiencesComponent
} from "./components/sections/technical-experiences/technical-experiences.component";
import {SkillsAndExpertiseComponent} from "./components/sections/skills-and-expertise/skills-and-expertise.component";

export const routes: Routes = [
  {path: '', component: SidebarComponent, title: 'Build Your CV'},
  {path: 'skills', component: SkillsAndExpertiseComponent, title: 'Skills and Expertise'},
  {path: 'basics', component: BasicsComponent, title: 'Basics'},
  {path: 'trainings', component: TrainingsComponent, title: 'Trainings'},
  {path: 'educations', component: EducationsComponent, title: 'Educations'},
  {path: 'languages', component: LanguagesComponent, title: 'Languages'},
  {path: 'experiences', component: ExperiencesComponent, title: 'Experiences'},
  {path: 'certifications', component: CertificationsComponent, title: 'Certifications'},
  {path: 'technical-experiences', component: TechnicalExperiencesComponent, title: 'Technical Experiences'},
  {path: '**', redirectTo: ''}
];
