import { HttpClientModule } from '@angular/common/http';
import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { combineLatest, switchMap } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "../services/follower.service";
const _c0 = (a1, a2) => ["/followers", a1, a2];
function FollowersComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 2);
    i0.ɵɵelement(1, "img", 3);
    i0.ɵɵelementStart(2, "div", 4)(3, "h3")(4, "a", 5);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(6, "a", 6);
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const follower_r1 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("src", follower_r1.avatar_url, i0.ɵɵsanitizeUrl);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("routerLink", i0.ɵɵpureFunction2(5, _c0, follower_r1.id, follower_r1.login));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", follower_r1.login, "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("href", follower_r1.html_url, i0.ɵɵsanitizeUrl);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(follower_r1.html_url);
} }
export class FollowersComponent {
    constructor(route, service) {
        this.route = route;
        this.service = service;
        this.followers = [];
    }
    ngOnInit() {
        combineLatest(this.route.paramMap, this.route.queryParamMap)
            .pipe(switchMap((combined) => {
            let params = combined[0];
            let queryParams = combined[1];
            return this.service.getAll();
        }))
            .subscribe((followers) => {
            this.followers = followers;
        });
    }
    static { this.ɵfac = function FollowersComponent_Factory(t) { return new (t || FollowersComponent)(i0.ɵɵdirectiveInject(i1.ActivatedRoute), i0.ɵɵdirectiveInject(i2.FollowerService)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: FollowersComponent, selectors: [["followers-component"]], standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 3, vars: 1, consts: [[1, "mb-4"], ["class", "d-flex align-items-center gap-4 mt-3", 4, "ngFor", "ngForOf"], [1, "d-flex", "align-items-center", "gap-4", "mt-3"], ["width", "100px", "height", "100px", 1, "rounded-circle", 3, "src"], [1, ""], [1, "text-dark", 3, "routerLink"], [3, "href"]], template: function FollowersComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "h1", 0);
            i0.ɵɵtext(1, "My Followers");
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(2, FollowersComponent_div_2_Template, 8, 8, "div", 1);
        } if (rf & 2) {
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngForOf", ctx.followers);
        } }, dependencies: [HttpClientModule, RouterModule, i1.RouterLink, NgFor] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FollowersComponent, [{
        type: Component,
        args: [{ selector: 'followers-component', standalone: true, imports: [HttpClientModule, RouterModule, NgFor], template: "<h1 class=\"mb-4\">My Followers</h1>\r\n<div\r\n  *ngFor=\"let follower of followers\"\r\n  class=\"d-flex align-items-center gap-4 mt-3\"\r\n>\r\n  <img\r\n    [src]=\"follower.avatar_url\"\r\n    width=\"100px\"\r\n    height=\"100px\"\r\n    class=\"rounded-circle\"\r\n  />\r\n  <div class>\r\n    <h3>\r\n      <a\r\n        class=\"text-dark\"\r\n        [routerLink]=\"['/followers', follower.id, follower.login]\"\r\n      >\r\n        {{ follower.login }}</a\r\n      >\r\n    </h3>\r\n    <a [href]=\"follower.html_url\">{{ follower.html_url }}</a>\r\n  </div>\r\n</div>\r\n" }]
    }], () => [{ type: i1.ActivatedRoute }, { type: i2.FollowerService }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(FollowersComponent, { className: "FollowersComponent", filePath: "src\\app\\followers-component\\followers.component.ts", lineNumber: 22 }); })();
//# sourceMappingURL=followers.component.js.map