import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, JsonpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import {AccordionModule} from 'primeng/primeng';  //accordion and accordion tab
import {FieldsetModule} from 'primeng/primeng';
import {SliderModule} from 'primeng/primeng';

import { AppComponent }  from './app.component';
import { ContestsComponent } from './contests.component';
import { ContestDetailComponent } from './contest-detail.component';
import { JudgingManagerComponent } from './judging-manager.component';
import { ContestantsComponent } from './contestants.component';
import { ContestJudgingComponent } from './contest-judging.component';
import { ScoresComponent } from './scores.component';
import { JudgingItemScoreComponent } from './judging-item-score.component';

import { ContestService } from './contest.service';
import { ContestantService } from './contestant.service';
import { ScoringService } from './scoring.service';


@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    JsonpModule,
    FormsModule,
    RouterModule.forRoot ([
    {path: '', redirectTo: '/setup', pathMatch: 'full'},
      {path: 'setup', component: ContestsComponent},
      {path: 'contestants', component: ContestantsComponent},
      {path: 'judging', component: ContestJudgingComponent}
    ]),
    AccordionModule,
    FieldsetModule,
    SliderModule
  ],
  declarations: [
    AppComponent,
    ContestsComponent,
    ContestDetailComponent,
    JudgingManagerComponent,
    ContestantsComponent,
    ContestJudgingComponent,
    ScoresComponent,
    JudgingItemScoreComponent
  ],
  providers: [ ContestService, ContestantService, ScoringService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
