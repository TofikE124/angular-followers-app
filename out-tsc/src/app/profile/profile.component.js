import { Component } from '@angular/core';
import { RouterModule, } from '@angular/router';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
const _c0 = () => ["/followers", 1234];
export class ProfileComponent {
    constructor(router, route) {
        this.router = router;
        this.route = route;
    }
    ngOnInit() {
        this.route.paramMap.subscribe((value) => {
            let id = +value.get('id');
            let username = value.get('username');
            console.log(id, username);
        });
    }
    submit() {
        this.router.navigate(['/followers'], {
            queryParams: {
                page: 1,
                order: 'newest',
            },
        });
    }
    static { this.ɵfac = function ProfileComponent_Factory(t) { return new (t || ProfileComponent)(i0.ɵɵdirectiveInject(i1.Router), i0.ɵɵdirectiveInject(i1.ActivatedRoute)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ProfileComponent, selectors: [["profile"]], standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 4, vars: 2, consts: [["routerLinkActive", "router-link-active", 1, "btn", "btn-primary", 3, "routerLink"]], template: function ProfileComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "p");
            i0.ɵɵtext(1, "profile works!");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(2, "button", 0);
            i0.ɵɵtext(3, " Next\n");
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("routerLink", i0.ɵɵpureFunction0(1, _c0));
        } }, dependencies: [RouterModule, i1.RouterLink, i1.RouterLinkActive] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ProfileComponent, [{
        type: Component,
        args: [{ selector: 'profile', standalone: true, imports: [RouterModule], template: "<p>profile works!</p>\r\n<button\r\n  [routerLink]=\"['/followers', 1234]\"\r\n  routerLinkActive=\"router-link-active\"\r\n  class=\"btn btn-primary\"\r\n>\r\n  Next\r\n</button>\r\n" }]
    }], () => [{ type: i1.Router }, { type: i1.ActivatedRoute }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ProfileComponent, { className: "ProfileComponent", filePath: "src\\app\\profile\\profile.component.ts", lineNumber: 16 }); })();
//# sourceMappingURL=profile.component.js.map