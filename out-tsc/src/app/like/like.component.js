import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
export class LikeComponent {
    constructor() {
        this.likes = 0;
        this.isLiked = false;
    }
    click() {
        this.isLiked = !this.isLiked;
        this.isLiked ? this.likes++ : this.likes--;
    }
    static { this.ɵfac = function LikeComponent_Factory(t) { return new (t || LikeComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: LikeComponent, selectors: [["like"]], inputs: { likes: "likes", isLiked: "isLiked" }, standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 4, vars: 3, consts: [[1, "d-flex", "heart-container", 3, "click"], [1, "bi", "bi-heart-fill"]], template: function LikeComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵlistener("click", function LikeComponent_Template_div_click_0_listener() { return ctx.click(); });
            i0.ɵɵelement(1, "i", 1);
            i0.ɵɵelementStart(2, "p");
            i0.ɵɵtext(3);
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            i0.ɵɵadvance();
            i0.ɵɵclassProp("active", ctx.isLiked);
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx.likes);
        } }, styles: [".heart-container[_ngcontent-%COMP%]{\r\n  cursor: pointer;\r\n}\r\n.bi-heart-fill[_ngcontent-%COMP%]{\r\n  color: gray;\r\n  margin-right: 0.5rem;\r\n}\r\n\r\n.bi-heart-fill.active[_ngcontent-%COMP%]{\r\n  color: red;\r\n}"] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(LikeComponent, [{
        type: Component,
        args: [{ selector: 'like', standalone: true, imports: [], template: "<div class=\"d-flex heart-container\" (click)=\"click()\">\r\n  <i class=\"bi bi-heart-fill\" [class.active]=\"isLiked\"></i>\r\n  <p>{{likes}}</p>\r\n</div>", styles: [".heart-container{\r\n  cursor: pointer;\r\n}\r\n.bi-heart-fill{\r\n  color: gray;\r\n  margin-right: 0.5rem;\r\n}\r\n\r\n.bi-heart-fill.active{\r\n  color: red;\r\n}"] }]
    }], null, { likes: [{
            type: Input,
            args: ['likes']
        }], isLiked: [{
            type: Input,
            args: ['isLiked']
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(LikeComponent, { className: "LikeComponent", filePath: "src\\app\\like\\like.component.ts", lineNumber: 10 }); })();
//# sourceMappingURL=like.component.js.map