import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
const _c0 = (a0, a1) => ({ "bi-star": a0, "bi-star-fill": a1 });
export class StarComponent {
    constructor() {
        this.isActive = false;
        this.click = new EventEmitter();
    }
    onClick() {
        this.isActive = !this.isActive;
        this.click.emit({ newValue: this.isActive });
    }
    static { this.ɵfac = function StarComponent_Factory(t) { return new (t || StarComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: StarComponent, selectors: [["star"]], inputs: { isActive: [i0.ɵɵInputFlags.None, "is-active", "isActive"] }, outputs: { click: "change" }, standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 1, vars: 4, consts: [[1, "bi", 3, "ngClass", "click"]], template: function StarComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "i", 0);
            i0.ɵɵlistener("click", function StarComponent_Template_i_click_0_listener() { return ctx.onClick(); });
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction2(1, _c0, !ctx.isActive, ctx.isActive));
        } }, dependencies: [CommonModule, i1.NgClass] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(StarComponent, [{
        type: Component,
        args: [{ selector: 'star', standalone: true, imports: [CommonModule], template: "<i class=\"bi\" \r\n  [ngClass]=\"{\r\n    'bi-star':!isActive,\r\n    'bi-star-fill':isActive\r\n  }\"\r\n  (click)=\"onClick()\">\r\n</i>" }]
    }], null, { isActive: [{
            type: Input,
            args: ['is-active']
        }], click: [{
            type: Output,
            args: ['change']
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(StarComponent, { className: "StarComponent", filePath: "src\\app\\star\\star.component.ts", lineNumber: 13 }); })();
//# sourceMappingURL=star.component.js.map