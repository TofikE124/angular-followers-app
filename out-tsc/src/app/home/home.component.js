import { Component } from '@angular/core';
import * as i0 from "@angular/core";
export class HomeComponent {
    static { this.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: HomeComponent, selectors: [["home"]], standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 2, vars: 0, template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "h1");
            i0.ɵɵtext(1, "Home Page");
            i0.ɵɵelementEnd();
        } } }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(HomeComponent, [{
        type: Component,
        args: [{ selector: 'home', standalone: true, imports: [], template: "<h1>Home Page</h1>\r\n" }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(HomeComponent, { className: "HomeComponent", filePath: "src\\app\\home\\home.component.ts", lineNumber: 10 }); })();
//# sourceMappingURL=home.component.js.map