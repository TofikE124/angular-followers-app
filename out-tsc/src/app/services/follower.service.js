import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
export class FollowerService extends DataService {
    constructor(http) {
        super('https://api.github.com/users/mosh-hamedani/followers', http);
    }
    static { this.ɵfac = function FollowerService_Factory(t) { return new (t || FollowerService)(i0.ɵɵinject(i1.HttpClient)); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: FollowerService, factory: FollowerService.ɵfac, providedIn: 'any' }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FollowerService, [{
        type: Injectable,
        args: [{
                providedIn: 'any',
            }]
    }], () => [{ type: i1.HttpClient }], null); })();
//# sourceMappingURL=follower.service.js.map