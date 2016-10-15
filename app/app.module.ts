import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import { ContestsComponent } from './contests.component';
import { ContestDetailComponent } from './contest-detail.component';
import { JudgingManagerComponent } from './judging-manager.component';
import { ContestService } from './contest.service';

@NgModule({
  imports: [ BrowserModule, FormsModule ],
  declarations: [
    AppComponent,
    ContestsComponent,
    ContestDetailComponent,
    JudgingManagerComponent
  ],
  providers: [ ContestService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
