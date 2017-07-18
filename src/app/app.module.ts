import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import * as comments from './comments';

@NgModule({
  declarations: [
    AppComponent,
    comments.CommentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    comments.CommentService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
