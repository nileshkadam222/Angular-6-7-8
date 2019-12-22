import { enableProdMode } from '@angular/core';
// from this file @angular/platform-browser-dynamic import platformBrowserDynamic can be functions, object, string, number, boolean
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/modules/app/app.module';
import { environment } from './environments/environment';


if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch(err => console.error(err));
