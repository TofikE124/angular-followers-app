import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
const _c0 = (a1, a2) => ["/archives", a1, a2];
function ArchivesComponent_li_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li")(1, "a", 1);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const archive_r1 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("routerLink", i0.ɵɵpureFunction2(3, _c0, archive_r1.year, archive_r1.month));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate2(" ", archive_r1.year, "/", archive_r1.month, " ");
} }
export class ArchivesComponent {
    constructor() {
        this.archives = [
            { year: 2017, month: 1 },
            { year: 2017, month: 2 },
            { year: 2017, month: 3 },
        ];
    }
    static { this.ɵfac = function ArchivesComponent_Factory(t) { return new (t || ArchivesComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ArchivesComponent, selectors: [["archives"]], standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 4, vars: 1, consts: [[4, "ngFor", "ngForOf"], [3, "routerLink"]], template: function ArchivesComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "h1");
            i0.ɵɵtext(1, "Home Page");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(2, "ul");
            i0.ɵɵtemplate(3, ArchivesComponent_li_3_Template, 3, 6, "li", 0);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngForOf", ctx.archives);
        } }, dependencies: [NgFor, RouterModule, i1.RouterLink] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ArchivesComponent, [{
        type: Component,
        args: [{ selector: 'archives', standalone: true, imports: [NgFor, RouterModule], template: "<h1>Home Page</h1>\r\n<ul>\r\n  <li *ngFor=\"let archive of archives\">\r\n    <a [routerLink]=\"['/archives', archive.year, archive.month]\">\r\n      {{ archive.year }}/{{ archive.month }}\r\n    </a>\r\n  </li>\r\n</ul>\r\n" }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ArchivesComponent, { className: "ArchivesComponent", filePath: "src\\app\\archives\\archives.component.ts", lineNumber: 13 }); })();
//# sourceMappingURL=archives.component.js.map