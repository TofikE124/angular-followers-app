import { Component } from '@angular/core';
import * as i0 from "@angular/core";
export class NotFoundComponent {
    static { this.ɵfac = function NotFoundComponent_Factory(t) { return new (t || NotFoundComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: NotFoundComponent, selectors: [["not-found"]], standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 2, vars: 0, template: function NotFoundComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "p");
            i0.ɵɵtext(1, "not-found works!");
            i0.ɵɵelementEnd();
        } } }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NotFoundComponent, [{
        type: Component,
        args: [{ standalone: true, selector: 'not-found', imports: [], template: "<p>not-found works!</p>\r\n" }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(NotFoundComponent, { className: "NotFoundComponent", filePath: "src\\app\\not-found\\not-found.component.ts", lineNumber: 10 }); })();
//# sourceMappingURL=not-found.component.js.map