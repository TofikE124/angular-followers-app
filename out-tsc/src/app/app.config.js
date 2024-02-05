import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { loggerInterceptor } from './logger.interceptor';
export const appConfig = {
    providers: [
        provideRouter(routes),
        provideClientHydration(),
        provideHttpClient(withInterceptors([loggerInterceptor])),
    ],
};
//# sourceMappingURL=app.config.js.map