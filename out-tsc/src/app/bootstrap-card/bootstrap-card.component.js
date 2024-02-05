import { Component } from '@angular/core';
import * as i0 from "@angular/core";
const _c0 = [[["", 8, "heading"]], [["", 8, "body"]]];
const _c1 = [".heading", ".body"];
export class BootstrapCardComponent {
    static { this.ɵfac = function BootstrapCardComponent_Factory(t) { return new (t || BootstrapCardComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: BootstrapCardComponent, selectors: [["bootstrap-card"]], standalone: true, features: [i0.ɵɵStandaloneFeature], ngContentSelectors: _c1, decls: 6, vars: 0, consts: [[1, "card", 2, "width", "18rem"], [1, "card-body"], [1, "card-title"], [1, "card-text"]], template: function BootstrapCardComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef(_c0);
            i0.ɵɵelementStart(0, "div", 0)(1, "div", 1)(2, "h5", 2);
            i0.ɵɵprojection(3);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "p", 3);
            i0.ɵɵprojection(5, 1);
            i0.ɵɵelementEnd()()();
        } } }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BootstrapCardComponent, [{
        type: Component,
        args: [{ selector: 'bootstrap-card', standalone: true, imports: [], template: "<div class=\"card\" style=\"width: 18rem;\">\r\n  <div class=\"card-body\">\r\n    <h5 class=\"card-title\">\r\n      <ng-content select=\".heading\"></ng-content>\r\n    </h5>\r\n    <p class=\"card-text\">\r\n      <ng-content select=\".body\"></ng-content>\r\n    </p>\r\n  </div>\r\n</div>" }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(BootstrapCardComponent, { className: "BootstrapCardComponent", filePath: "src\\app\\bootstrap-card\\bootstrap-card.component.ts", lineNumber: 10 }); })();
//# sourceMappingURL=bootstrap-card.component.js.map