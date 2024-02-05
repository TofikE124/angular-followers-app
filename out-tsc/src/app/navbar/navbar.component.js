import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
const _c0 = () => ({ page: 1, name: "tofik" });
export class NavbarComponent {
    static { this.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: NavbarComponent, selectors: [["navbar"]], standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 7, vars: 2, consts: [[1, "nav", "nav-pills", "mb-2"], [1, "nav-item"], ["routerLink", "followers", "routerLinkActive", "active", 1, "nav-link", "me-2", 3, "queryParams"], ["routerLink", "posts", "routerLinkActive", "active", 1, "nav-link", "me-2"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "ul", 0)(1, "li", 1)(2, "a", 2);
            i0.ɵɵtext(3, "Followers");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(4, "li", 1)(5, "a", 3);
            i0.ɵɵtext(6, "Posts");
            i0.ɵɵelementEnd()()();
        } if (rf & 2) {
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("queryParams", i0.ɵɵpureFunction0(1, _c0));
        } }, dependencies: [RouterModule, i1.RouterLink, i1.RouterLinkActive] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NavbarComponent, [{
        type: Component,
        args: [{ selector: 'navbar', standalone: true, imports: [RouterModule], template: "<ul class=\"nav nav-pills mb-2\">\r\n  <li class=\"nav-item\">\r\n    <a\r\n      class=\"nav-link me-2\"\r\n      [queryParams]=\"{ page: 1, name: 'tofik' }\"\r\n      routerLink=\"followers\"\r\n      routerLinkActive=\"active\"\r\n      >Followers</a\r\n    >\r\n  </li>\r\n  <li class=\"nav-item\">\r\n    <a class=\"nav-link me-2\" routerLink=\"posts\" routerLinkActive=\"active\"\r\n      >Posts</a\r\n    >\r\n  </li>\r\n</ul>\r\n" }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(NavbarComponent, { className: "NavbarComponent", filePath: "src\\app\\navbar\\navbar.component.ts", lineNumber: 11 }); })();
//# sourceMappingURL=navbar.component.js.map