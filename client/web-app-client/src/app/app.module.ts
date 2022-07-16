import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderBarComponent } from './header-bar/header-bar.component';
import { FooterBarComponent } from './footer-bar/footer-bar.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { SocialsComponent } from './socials/socials.component';
import { LandingComponent } from './landing/landing.component';
import { ProjectShowcaseComponent } from './project-showcase/project-showcase.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderBarComponent,
    FooterBarComponent,
    AboutMeComponent,
    SocialsComponent,
    LandingComponent,
    ProjectShowcaseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
