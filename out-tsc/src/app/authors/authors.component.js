import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SummaryPipe } from '../summary.pipe';
import * as i0 from "@angular/core";
import * as i1 from "../services/authors.service";
import * as i2 from "@angular/common";
import * as i3 from "@angular/forms";
function AuthorsComponent_li_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "li");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const author_r1 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(author_r1);
} }
export class AuthorsComponent {
    onKeyUp() {
        console.log(this.email);
    }
    constructor(authorsService) {
        this.colspan = 2;
        this.isActive = true;
        this.email = 'me@gmail.com';
        this.course = {
            title: 'the complete angular course',
            rating: 4.5,
            students: 30123,
            price: 190.91,
            realeaseDate: new Date(),
        };
        this.text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed feugiat, erat at pulvinar malesuada, elit augue volutpat justo, et commodo metus ligula sit amet ipsum. Nunc sem odio, tempus eu fermentum convallis, pharetra in dolor. Sed gravida ac justo et cursus. Mauris cursus viverra blandit. Phasellus est odio';
        this.authors = authorsService.getAuthors();
    }
    static { this.ɵfac = function AuthorsComponent_Factory(t) { return new (t || AuthorsComponent)(i0.ɵɵdirectiveInject(i1.AuthorsService)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AuthorsComponent, selectors: [["authors"]], standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 26, vars: 23, consts: [[1, "p-4"], [4, "ngFor", "ngForOf"], [3, "colSpan"], [3, "ngModel", "ngModelChange", "keyup.enter"]], template: function AuthorsComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0)(1, "h2");
            i0.ɵɵtext(2);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "ul");
            i0.ɵɵtemplate(4, AuthorsComponent_li_4_Template, 2, 1, "li", 1);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(5, "table")(6, "tbody")(7, "tr")(8, "td", 2);
            i0.ɵɵtext(9, "1");
            i0.ɵɵelementEnd()()()();
            i0.ɵɵelementStart(10, "input", 3);
            i0.ɵɵlistener("ngModelChange", function AuthorsComponent_Template_input_ngModelChange_10_listener($event) { return ctx.email = $event; })("keyup.enter", function AuthorsComponent_Template_input_keyup_enter_10_listener() { return ctx.onKeyUp(); });
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(11, "h1");
            i0.ɵɵtext(12);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(13, "h1");
            i0.ɵɵtext(14);
            i0.ɵɵpipe(15, "number");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(16, "h1");
            i0.ɵɵtext(17);
            i0.ɵɵpipe(18, "currency");
            i0.ɵɵpipe(19, "number");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(20, "h1");
            i0.ɵɵtext(21);
            i0.ɵɵpipe(22, "date");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(23, "h2");
            i0.ɵɵtext(24);
            i0.ɵɵpipe(25, "summary");
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate1("", ctx.authors.length, " Authors");
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngForOf", ctx.authors);
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("colSpan", ctx.colspan);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngModel", ctx.email);
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx.course.title);
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(15, 9, ctx.course.students));
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(18, 11, i0.ɵɵpipeBind2(19, 14, ctx.course.price, "0.1-1"), "SAR"));
            i0.ɵɵadvance(4);
            i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(22, 17, ctx.course.realeaseDate, "shortDate"));
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(25, 20, ctx.text, 1000));
        } }, dependencies: [CommonModule, i2.NgForOf, i2.DecimalPipe, i2.CurrencyPipe, i2.DatePipe, FormsModule, i3.DefaultValueAccessor, i3.NgControlStatus, i3.NgModel, SummaryPipe] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AuthorsComponent, [{
        type: Component,
        args: [{ selector: 'authors', standalone: true, imports: [CommonModule, FormsModule, SummaryPipe], template: "<div class=\"p-4\">\r\n  <h2>{{authors.length}} Authors</h2>\r\n  <ul>\r\n    <li *ngFor=\"let author of authors\">{{author}}</li>\r\n  </ul>\r\n  <table>\r\n    <tbody>\r\n      <tr>\r\n        <td [colSpan]=\"colspan\">1</td>\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n  <input [(ngModel)]=\"email\" (keyup.enter)=\"onKeyUp()\" />\r\n</div>\r\n\r\n<h1>{{course.title}}</h1>\r\n<h1>{{course.students | number}}</h1>\r\n<h1>{{course.price | number:'0.1-1' | currency:'SAR'}}</h1>\r\n<h1>{{course.realeaseDate | date:'shortDate'}}</h1>\r\n\r\n<h2>{{text | summary:1000}}</h2>\r\n\r\n\r\n" }]
    }], () => [{ type: i1.AuthorsService }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(AuthorsComponent, { className: "AuthorsComponent", filePath: "src\\app\\authors\\authors.component.ts", lineNumber: 14 }); })();
//# sourceMappingURL=authors.component.js.map