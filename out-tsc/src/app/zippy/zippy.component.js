import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
const _c0 = ["*"];
export class ZippyComponent {
    constructor() {
        this.title = "";
        this.isActive = false;
    }
    toggle() {
        this.isActive = !this.isActive;
    }
    static { this.ɵfac = function ZippyComponent_Factory(t) { return new (t || ZippyComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ZippyComponent, selectors: [["zippy"]], inputs: { title: "title" }, standalone: true, features: [i0.ɵɵStandaloneFeature], ngContentSelectors: _c0, decls: 6, vars: 3, consts: [[1, "dropdown-center"], ["type", "button", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "btn", "btn-secondary", "dropdown-toggle", 3, "click"], [1, "dropdown-menu"]], template: function ZippyComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵelementStart(0, "div", 0)(1, "button", 1);
            i0.ɵɵlistener("click", function ZippyComponent_Template_button_click_1_listener() { return ctx.toggle(); });
            i0.ɵɵtext(2);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "ul", 2)(4, "li");
            i0.ɵɵprojection(5);
            i0.ɵɵelementEnd()()();
        } if (rf & 2) {
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate1(" ", ctx.title, " ");
            i0.ɵɵadvance();
            i0.ɵɵclassProp("show", ctx.isActive);
        } } }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ZippyComponent, [{
        type: Component,
        args: [{ selector: 'zippy', standalone: true, imports: [], template: "<div class=\"dropdown-center\">\r\n  <button class=\"btn btn-secondary dropdown-toggle\" (click)=\"toggle()\" type=\"button\" data-bs-toggle=\"dropdown\" aria-expanded=\"false\">\r\n    {{title}}\r\n  </button>\r\n  <ul class=\"dropdown-menu\"\r\n      [class.show]=\"isActive\">\r\n      <li>\r\n        <ng-content></ng-content>\r\n      </li>\r\n  </ul>\r\n</div>" }]
    }], null, { title: [{
            type: Input,
            args: ['title']
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ZippyComponent, { className: "ZippyComponent", filePath: "src\\app\\zippy\\zippy.component.ts", lineNumber: 10 }); })();
//# sourceMappingURL=zippy.component.js.map