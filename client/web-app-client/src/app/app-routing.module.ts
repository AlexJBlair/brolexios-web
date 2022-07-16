import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './about-me/about-me.component';
import { LandingComponent } from './landing/landing.component';
import { ProjectShowcaseComponent } from './project-showcase/project-showcase.component';
import { SocialsComponent } from './socials/socials.component';

const routes: Routes = [
  {path: '', redirectTo:'/landing', pathMatch: 'full'},
  {path: 'landing', component: LandingComponent},
  {path: 'about-me', component: AboutMeComponent},
  {path: 'socials', component: SocialsComponent},
  {path: 'project-showcase', component: ProjectShowcaseComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
