import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
export class ArchiveComponent {
    constructor(router, route) {
        this.router = router;
        this.route = route;
        this.archive = {};
    }
    ngOnInit() {
        this.route.paramMap.subscribe((params) => {
            this.archive = {
                year: +params.get('year'),
                month: +params.get('month'),
            };
        });
    }
    viewAll() {
        this.router.navigate(['']);
    }
    static { this.ɵfac = function ArchiveComponent_Factory(t) { return new (t || ArchiveComponent)(i0.ɵɵdirectiveInject(i1.Router), i0.ɵɵdirectiveInject(i1.ActivatedRoute)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ArchiveComponent, selectors: [["archive"]], standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 4, vars: 2, consts: [[1, "btn", "btn-primary", 3, "click"]], template: function ArchiveComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "h1");
            i0.ɵɵtext(1);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(2, "button", 0);
            i0.ɵɵlistener("click", function ArchiveComponent_Template_button_click_2_listener() { return ctx.viewAll(); });
            i0.ɵɵtext(3, "View All");
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance();
            i0.ɵɵtextInterpolate2("Archive for ", ctx.archive.year, " / ", ctx.archive.month, "");
        } } }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ArchiveComponent, [{
        type: Component,
        args: [{ selector: 'archive', standalone: true, imports: [], template: "<h1>Archive for {{ archive.year }} / {{ archive.month }}</h1>\r\n<button class=\"btn btn-primary\" (click)=\"viewAll()\">View All</button>\r\n" }]
    }], () => [{ type: i1.Router }, { type: i1.ActivatedRoute }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ArchiveComponent, { className: "ArchiveComponent", filePath: "src\\app\\archive\\archive.component.ts", lineNumber: 16 }); })();
//# sourceMappingURL=archive.component.js.map