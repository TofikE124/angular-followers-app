import { CommonModule, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/forms";
function CourseFormComponent_div_7_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1, "CourseName is Required");
    i0.ɵɵelementEnd();
} }
function CourseFormComponent_div_7_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵnextContext(2);
    const _r1 = i0.ɵɵreference(6);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" Name should be at least ", _r1.errors == null ? null : _r1.errors.minlength.requiredLength, " characters. ");
} }
function CourseFormComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 15);
    i0.ɵɵtemplate(1, CourseFormComponent_div_7_div_1_Template, 2, 0, "div", 16)(2, CourseFormComponent_div_7_div_2_Template, 2, 1, "div", 16);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵnextContext();
    const _r1 = i0.ɵɵreference(6);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", _r1.errors == null ? null : _r1.errors.required);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", _r1.errors == null ? null : _r1.errors.minlength);
} }
function CourseFormComponent_option_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 17);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const cateogry_r8 = ctx.$implicit;
    i0.ɵɵproperty("value", cateogry_r8.id);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", cateogry_r8.name, " ");
} }
function CourseFormComponent_div_14_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1, "Category is Required");
    i0.ɵɵelementEnd();
} }
function CourseFormComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 15);
    i0.ɵɵtemplate(1, CourseFormComponent_div_14_div_1_Template, 2, 0, "div", 16);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵnextContext();
    const _r3 = i0.ɵɵreference(12);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", _r3.errors == null ? null : _r3.errors.required);
} }
export class CourseFormComponent {
    constructor() {
        this.courseCategories = [
            { id: 1, name: 'Development' },
            { id: 2, name: 'Art' },
            { id: 3, name: 'Languages' },
        ];
    }
    submit(form) {
        console.log(form.value);
    }
    static { this.ɵfac = function CourseFormComponent_Factory(t) { return new (t || CourseFormComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CourseFormComponent, selectors: [["course-form"]], standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 24, vars: 7, consts: [[3, "ngSubmit"], ["form", "ngForm"], [1, "mb-3"], ["for", "exampleInputEmail1", 1, "form-label"], ["required", "", "ngModel", "", "minlength", "5", "type", "text", "id", "courseName", "name", "courseName", 1, "form-control"], ["courseName", "ngModel"], ["class", "alert alert-danger mt-2", 4, "ngIf"], ["for", "cateogry", 1, "form-label", "me-2"], ["required", "", "ngModel", "", "id", "category", "name", "category"], ["cateogry", "ngModel"], [3, "value", 4, "ngFor", "ngForOf"], [1, "mb-3", "form-check"], ["type", "checkbox", "id", "hasGuarantee", "name", "hasGuarantee", "ngModel", "", 1, "form-check-input"], ["for", "hasGuarantee", 1, "form-check-label"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], [1, "alert", "alert-danger", "mt-2"], [4, "ngIf"], [3, "value"]], template: function CourseFormComponent_Template(rf, ctx) { if (rf & 1) {
            const _r10 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "form", 0, 1);
            i0.ɵɵlistener("ngSubmit", function CourseFormComponent_Template_form_ngSubmit_0_listener() { i0.ɵɵrestoreView(_r10); const _r0 = i0.ɵɵreference(1); return i0.ɵɵresetView(ctx.submit(_r0)); });
            i0.ɵɵelementStart(2, "div", 2)(3, "label", 3);
            i0.ɵɵtext(4, "Course Name");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(5, "input", 4, 5);
            i0.ɵɵtemplate(7, CourseFormComponent_div_7_Template, 3, 2, "div", 6);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(8, "div", 2)(9, "label", 7);
            i0.ɵɵtext(10, "Category");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(11, "select", 8, 9);
            i0.ɵɵtemplate(13, CourseFormComponent_option_13_Template, 2, 2, "option", 10);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(14, CourseFormComponent_div_14_Template, 2, 1, "div", 6);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(15, "div", 11);
            i0.ɵɵelement(16, "input", 12);
            i0.ɵɵelementStart(17, "label", 13);
            i0.ɵɵtext(18, "30 Day money-back guarantee ?");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(19, "p");
            i0.ɵɵtext(20);
            i0.ɵɵpipe(21, "json");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(22, "button", 14);
            i0.ɵɵtext(23, " Create ");
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            const _r0 = i0.ɵɵreference(1);
            const _r1 = i0.ɵɵreference(6);
            const _r3 = i0.ɵɵreference(12);
            i0.ɵɵadvance(7);
            i0.ɵɵproperty("ngIf", _r1.touched && _r1.invalid);
            i0.ɵɵadvance(6);
            i0.ɵɵproperty("ngForOf", ctx.courseCategories);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", _r3.touched && _r3.invalid);
            i0.ɵɵadvance(6);
            i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(21, 5, _r0.value));
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("disabled", _r0.invalid);
        } }, dependencies: [CommonModule, i1.NgForOf, i1.NgIf, i1.JsonPipe, FormsModule, i2.ɵNgNoValidate, i2.NgSelectOption, i2.ɵNgSelectMultipleOption, i2.DefaultValueAccessor, i2.CheckboxControlValueAccessor, i2.SelectControlValueAccessor, i2.NgControlStatus, i2.NgControlStatusGroup, i2.RequiredValidator, i2.MinLengthValidator, i2.NgModel, i2.NgForm] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CourseFormComponent, [{
        type: Component,
        args: [{ selector: 'course-form', standalone: true, imports: [CommonModule, FormsModule, NgIf, NgFor], template: "<form #form=\"ngForm\" (ngSubmit)=\"submit(form)\">\r\n  <div class=\"mb-3\">\r\n    <label for=\"exampleInputEmail1\" class=\"form-label\">Course Name</label>\r\n    <input\r\n      required\r\n      ngModel\r\n      #courseName=\"ngModel\"\r\n      minlength=\"5\"\r\n      type=\"text\"\r\n      class=\"form-control\"\r\n      id=\"courseName\"\r\n      name=\"courseName\"\r\n    />\r\n    <div\r\n      class=\"alert alert-danger mt-2\"\r\n      *ngIf=\"courseName.touched && courseName.invalid\"\r\n    >\r\n      <div *ngIf=\"courseName.errors?.required\">CourseName is Required</div>\r\n      <div *ngIf=\"courseName.errors?.minlength\">\r\n        Name should be at least\r\n        {{ courseName.errors?.minlength.requiredLength }} characters.\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"mb-3\">\r\n    <label for=\"cateogry\" class=\"form-label me-2\">Category</label>\r\n    <select required ngModel #cateogry=\"ngModel\" id=\"category\" name=\"category\">\r\n      <option *ngFor=\"let cateogry of courseCategories\" [value]=\"cateogry.id\">\r\n        {{ cateogry.name }}\r\n      </option>\r\n    </select>\r\n    <div\r\n      class=\"alert alert-danger mt-2\"\r\n      *ngIf=\"cateogry.touched && cateogry.invalid\"\r\n    >\r\n      <div *ngIf=\"cateogry.errors?.required\">Category is Required</div>\r\n    </div>\r\n  </div>\r\n  <div class=\"mb-3 form-check\">\r\n    <input\r\n      type=\"checkbox\"\r\n      class=\"form-check-input\"\r\n      id=\"hasGuarantee\"\r\n      name=\"hasGuarantee\"\r\n      ngModel\r\n    />\r\n    <label class=\"form-check-label\" for=\"hasGuarantee\"\r\n      >30 Day money-back guarantee ?</label\r\n    >\r\n  </div>\r\n  <p>{{ form.value | json }}</p>\r\n  <button [disabled]=\"form.invalid\" type=\"submit\" class=\"btn btn-primary\">\r\n    Create\r\n  </button>\r\n</form>\r\n" }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(CourseFormComponent, { className: "CourseFormComponent", filePath: "src\\app\\course-form\\course-form.component.ts", lineNumber: 12 }); })();
//# sourceMappingURL=course-form.component.js.map