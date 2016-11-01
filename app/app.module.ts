import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import {AccordionModule} from 'primeng/primeng';  //accordion and accordion tab
import {SliderModule} from 'primeng/primeng';

import { AppComponent }  from './app.component';
import { ContestsComponent } from './contests.component';
import { ContestDetailComponent } from './contest-detail.component';
import { JudgingManagerComponent } from './judging-manager.component';
import { ContestantsComponent } from './contestants.component';
import { ContestJudgingComponent } from './contest-judging.component';
import { Scores } from './scores.component';

import { ContestService } from './contest.service';
import { ContestantService } from './contestant.service';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot ([
    {path: '', redirectTo: '/setup', pathMatch: 'full'},
      {path: 'setup', component: ContestsComponent},
      {path: 'contestants', component: ContestantsComponent},
      {path: 'judging', component: ContestJudgingComponent}
    ]),
    AccordionModule,
    SliderModule
  ],
  declarations: [
    AppComponent,
    ContestsComponent,
    ContestDetailComponent,
    JudgingManagerComponent,
    ContestantsComponent,
    ContestJudgingComponent,
    Scores
  ],
  providers: [ ContestService, ContestantService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
