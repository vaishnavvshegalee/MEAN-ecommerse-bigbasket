import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { provideToastr } from 'ngx-toastr';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    provideToastr({
      timeOut: 2000,
      positionClass: 'toast-top-center',
      easing: 'ease-in-out',
      newestOnTop: true,
      progressBar: true,
    }),
  ],
};
