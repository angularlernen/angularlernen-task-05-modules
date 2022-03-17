import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ProfilePictureComponent } from './profile-picture/profile-picture.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, ProfilePictureComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
