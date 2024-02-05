import { TestBed } from '@angular/core/testing';
import { loggerInterceptor } from './logger.interceptor';
describe('loggerInterceptor', () => {
    const interceptor = (req, next) => TestBed.runInInjectionContext(() => loggerInterceptor(req, next));
    beforeEach(() => {
        TestBed.configureTestingModule({});
    });
    it('should be created', () => {
        expect(interceptor).toBeTruthy();
    });
});
//# sourceMappingURL=logger.interceptor.spec.js.map