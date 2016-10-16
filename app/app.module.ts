import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent }  from './app.component';
import { ContestsComponent } from './contests.component';
import { ContestDetailComponent } from './contest-detail.component';
import { JudgingManagerComponent } from './judging-manager.component';
import { ContestantsComponent } from './contestants.component';
import { ContestService } from './contest.service';
import { ContestantService } from './contestant.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot ([
    {path: '', redirectTo: '/setup', pathMatch: 'full'},
      {path: 'setup', component: ContestsComponent},
      {path: 'contestants', component: ContestantsComponent}
    ])
  ],
  declarations: [
    AppComponent,
    ContestsComponent,
    ContestDetailComponent,
    JudgingManagerComponent,
    ContestantsComponent
  ],
  providers: [ ContestService, ContestantService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
