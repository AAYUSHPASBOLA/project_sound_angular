import { enableAkitaProdMode,persistState } from '@datorama/akita';
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
  enableAkitaProdMode();
}
persistState();

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
