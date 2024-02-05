import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
export class AuthorsService {
    getAuthors() {
        return ['author1', 'author2', 'author3'];
    }
    constructor() { }
    static { this.ɵfac = function AuthorsService_Factory(t) { return new (t || AuthorsService)(); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: AuthorsService, factory: AuthorsService.ɵfac, providedIn: 'root' }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AuthorsService, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], () => [], null); })();
//# sourceMappingURL=authors.service.js.map