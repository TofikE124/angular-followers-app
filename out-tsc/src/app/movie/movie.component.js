import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MyTitleCasePipe } from '../my-title-case.pipe';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
export class MovieComponent {
    constructor() {
        this.movieName = "";
    }
    onChange() {
        console.log(this.movieName);
    }
    static { this.ɵfac = function MovieComponent_Factory(t) { return new (t || MovieComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: MovieComponent, selectors: [["movie"]], standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 4, vars: 4, consts: [[3, "ngModel", "ngModelChange", "change"]], template: function MovieComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "input", 0);
            i0.ɵɵlistener("ngModelChange", function MovieComponent_Template_input_ngModelChange_0_listener($event) { return ctx.movieName = $event; })("change", function MovieComponent_Template_input_change_0_listener() { return ctx.onChange(); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(1, "h3");
            i0.ɵɵtext(2);
            i0.ɵɵpipe(3, "myTitleCase");
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵproperty("ngModel", ctx.movieName);
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(3, 2, ctx.movieName));
        } }, dependencies: [CommonModule, FormsModule, i1.DefaultValueAccessor, i1.NgControlStatus, i1.NgModel, MyTitleCasePipe] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MovieComponent, [{
        type: Component,
        args: [{ selector: 'movie', standalone: true, imports: [CommonModule, FormsModule, MyTitleCasePipe], template: "<input [(ngModel)]=\"movieName\" (change)=\"onChange()\">\r\n<h3>{{movieName | myTitleCase}}</h3>" }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(MovieComponent, { className: "MovieComponent", filePath: "src\\app\\movie\\movie.component.ts", lineNumber: 13 }); })();
//# sourceMappingURL=movie.component.js.map