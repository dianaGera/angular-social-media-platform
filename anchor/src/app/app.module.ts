import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LeftBarComponent } from './components/left-bar/left-bar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MainComponent } from './components/home/main/main.component';
import { MainHeaderComponent } from './components/home/main-header/main-header.component';
import { MessangerComponent } from './components/messanger/messanger.component';
import { SuggestionsComponent } from './components/suggestions/suggestions.component';
import { RightSideComponent } from './components/right-side/right-side.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LeftBarComponent,
    MainComponent,
    MainHeaderComponent,
    MessangerComponent,
    SuggestionsComponent,
    RightSideComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
