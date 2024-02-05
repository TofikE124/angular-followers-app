import { CommonModule, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/forms";
function ContactFormComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 20);
    i0.ɵɵtext(1, " First Name is reuqired. ");
    i0.ɵɵelementEnd();
} }
function ContactFormComponent_div_12_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1, "Comment is Required");
    i0.ɵɵelementEnd();
} }
function ContactFormComponent_div_12_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵnextContext(2);
    const _r3 = i0.ɵɵreference(11);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" Min length is ", _r3.errors == null ? null : _r3.errors.minlength == null ? null : _r3.errors.minlength.requiredLength, " ");
} }
function ContactFormComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 20);
    i0.ɵɵtemplate(1, ContactFormComponent_div_12_div_1_Template, 2, 0, "div", 21)(2, ContactFormComponent_div_12_div_2_Template, 2, 1, "div", 21);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵnextContext();
    const _r3 = i0.ɵɵreference(11);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", _r3.errors == null ? null : _r3.errors.required);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", _r3.errors == null ? null : _r3.errors.minlength);
} }
function ContactFormComponent_option_22_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 22);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const method_r9 = ctx.$implicit;
    i0.ɵɵproperty("value", method_r9.id);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", method_r9.name, " ");
} }
function ContactFormComponent_div_23_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 23)(1, "label");
    i0.ɵɵelement(2, "input", 24);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const radio_r10 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("value", radio_r10.id);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", radio_r10.name, " ");
} }
export class ContactFormComponent {
    constructor() {
        this.firstName = '';
        this.contactMethods = [
            { id: 1, name: 'Email' },
            { id: 2, name: 'Phone' },
            { id: 3, name: 'Whatsapp' },
        ];
    }
    log(obj) {
        console.log(obj);
    }
    submit(f) {
        console.log(f);
    }
    static { this.ɵfac = function ContactFormComponent_Factory(t) { return new (t || ContactFormComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ContactFormComponent, selectors: [["contact-form"]], standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 29, vars: 8, consts: [[3, "ngSubmit"], ["form", "ngForm"], ["for", "firstName", 1, "form-label"], ["required", "", "ngModel", "", "name", "firstName", "type", "email", "id", "firstName", 1, "form-control"], ["firstName", "ngModel"], ["class", "alert alert-danger mt-2", 4, "ngIf"], [1, "mb-3"], ["for", "comment", 1, "form-label"], ["required", "", "minlength", "3", "ngModel", "", "name", "comment", "type", "text", "id", "comment", "cols", "30", "rows", "10", 1, "form-control"], ["comment", "ngModel"], [1, "mb-3", "form-check"], ["type", "checkbox", "ngModel", "", "name", "isSubscribed", "id", "isSubscribed", 1, "form-check-input"], ["for", "isSubscribed", 1, "form-check-label"], [1, "form-group"], ["form", "contactMethod", 1, "me-2"], ["ngModel", "", "name", "contactMethod", "id", "contactMethod"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["class", "radio", 4, "ngFor", "ngForOf"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], [1, "alert", "alert-danger", "mt-2"], [4, "ngIf"], [3, "value"], [1, "radio"], ["type", "radio", "ngModel", "", "name", "contactMethod", 3, "value"]], template: function ContactFormComponent_Template(rf, ctx) { if (rf & 1) {
            const _r11 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "form", 0, 1);
            i0.ɵɵlistener("ngSubmit", function ContactFormComponent_Template_form_ngSubmit_0_listener() { i0.ɵɵrestoreView(_r11); const _r0 = i0.ɵɵreference(1); return i0.ɵɵresetView(ctx.submit(_r0)); });
            i0.ɵɵelementStart(2, "label", 2);
            i0.ɵɵtext(3, "First Name");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(4, "input", 3, 4);
            i0.ɵɵtemplate(6, ContactFormComponent_div_6_Template, 2, 0, "div", 5);
            i0.ɵɵelementStart(7, "div", 6)(8, "label", 7);
            i0.ɵɵtext(9, "Comment");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(10, "textarea", 8, 9);
            i0.ɵɵtemplate(12, ContactFormComponent_div_12_Template, 3, 2, "div", 5);
            i0.ɵɵelementStart(13, "div", 10);
            i0.ɵɵelement(14, "input", 11);
            i0.ɵɵelementStart(15, "label", 12);
            i0.ɵɵtext(16, "Check me out");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(17, "div", 13)(18, "label", 14);
            i0.ɵɵtext(19, "Contact Method");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(20, "select", 15);
            i0.ɵɵelement(21, "option", 16);
            i0.ɵɵtemplate(22, ContactFormComponent_option_22_Template, 2, 2, "option", 17);
            i0.ɵɵelementEnd()();
            i0.ɵɵtemplate(23, ContactFormComponent_div_23_Template, 4, 2, "div", 18);
            i0.ɵɵelementStart(24, "p");
            i0.ɵɵtext(25);
            i0.ɵɵpipe(26, "json");
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(27, "button", 19);
            i0.ɵɵtext(28, " Submit ");
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            const _r0 = i0.ɵɵreference(1);
            const _r1 = i0.ɵɵreference(5);
            const _r3 = i0.ɵɵreference(11);
            i0.ɵɵadvance(6);
            i0.ɵɵproperty("ngIf", _r1.touched && !_r1.valid);
            i0.ɵɵadvance(6);
            i0.ɵɵproperty("ngIf", _r3.touched && !_r3.valid);
            i0.ɵɵadvance(10);
            i0.ɵɵproperty("ngForOf", ctx.contactMethods);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngForOf", ctx.contactMethods);
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(i0.ɵɵpipeBind1(26, 6, _r0.value));
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("disabled", !_r0.valid);
        } }, dependencies: [CommonModule, i1.NgForOf, i1.NgIf, i1.JsonPipe, FormsModule, i2.ɵNgNoValidate, i2.NgSelectOption, i2.ɵNgSelectMultipleOption, i2.DefaultValueAccessor, i2.CheckboxControlValueAccessor, i2.SelectControlValueAccessor, i2.RadioControlValueAccessor, i2.NgControlStatus, i2.NgControlStatusGroup, i2.RequiredValidator, i2.MinLengthValidator, i2.NgModel, i2.NgForm] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ContactFormComponent, [{
        type: Component,
        args: [{ selector: 'contact-form', standalone: true, imports: [CommonModule, FormsModule, NgIf], template: "<form #form=\"ngForm\" (ngSubmit)=\"submit(form)\">\r\n  <label for=\"firstName\" class=\"form-label\">First Name</label>\r\n  <input\r\n    required\r\n    ngModel\r\n    #firstName=\"ngModel\"\r\n    name=\"firstName\"\r\n    type=\"email\"\r\n    class=\"form-control\"\r\n    id=\"firstName\"\r\n  />\r\n  <div\r\n    class=\"alert alert-danger mt-2\"\r\n    *ngIf=\"firstName.touched && !firstName.valid\"\r\n  >\r\n    First Name is reuqired.\r\n  </div>\r\n  <div class=\"mb-3\">\r\n    <label for=\"comment\" class=\"form-label\">Comment</label>\r\n    <textarea\r\n      required\r\n      minlength=\"3\"\r\n      ngModel\r\n      #comment=\"ngModel\"\r\n      name=\"comment\"\r\n      type=\"text\"\r\n      class=\"form-control\"\r\n      id=\"comment\"\r\n      cols=\"30\"\r\n      rows=\"10\"\r\n    ></textarea>\r\n    <div\r\n      class=\"alert alert-danger mt-2\"\r\n      *ngIf=\"comment.touched && !comment.valid\"\r\n    >\r\n      <div *ngIf=\"comment.errors?.required\">Comment is Required</div>\r\n      <div *ngIf=\"comment.errors?.minlength\">\r\n        Min length is {{ comment.errors?.minlength?.requiredLength }}\r\n      </div>\r\n    </div>\r\n    <div class=\"mb-3 form-check\">\r\n      <input\r\n        type=\"checkbox\"\r\n        ngModel\r\n        name=\"isSubscribed\"\r\n        id=\"isSubscribed\"\r\n        class=\"form-check-input\"\r\n      />\r\n      <label class=\"form-check-label\" for=\"isSubscribed\">Check me out</label>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label form=\"contactMethod\" class=\"me-2\">Contact Method</label>\r\n      <select ngModel name=\"contactMethod\" id=\"contactMethod\">\r\n        <option value=\"\"></option>\r\n        <option *ngFor=\"let method of contactMethods\" [value]=\"method.id\">\r\n          {{ method.name }}\r\n        </option>\r\n      </select>\r\n    </div>\r\n    <div class=\"radio\" *ngFor=\"let radio of contactMethods\">\r\n      <label>\r\n        <input type=\"radio\" ngModel name=\"contactMethod\" [value]=\"radio.id\" />\r\n        {{ radio.name }}\r\n      </label>\r\n    </div>\r\n    <p>{{ form.value | json }}</p>\r\n  </div>\r\n  <button [disabled]=\"!form.valid\" type=\"submit\" class=\"btn btn-primary\">\r\n    Submit\r\n  </button>\r\n</form>\r\n" }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ContactFormComponent, { className: "ContactFormComponent", filePath: "src\\app\\contact-form\\contact-form.component.ts", lineNumber: 12 }); })();
//# sourceMappingURL=contact-form.component.js.map