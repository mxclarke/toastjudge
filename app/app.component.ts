import { Component } from '@angular/core';

// Add the RxJS Observable operators.
import './rxjs-operators';

@Component({
    selector: 'my-app',
    template: `
      <h1>Toastmasters Contest</h1>
      <nav>
        <a routerLink="/setup">Setup</a>
        <a routerLink="/contestants">Contestants</a>
        <a routerLink="/judging">Judging</a>
      </nav>
      <router-outlet></router-outlet>
    `
})
export class AppComponent {
}
