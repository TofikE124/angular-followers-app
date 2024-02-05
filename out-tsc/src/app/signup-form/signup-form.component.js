import { CommonModule, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormControl, FormsModule, ReactiveFormsModule, Validators, } from '@angular/forms';
import { UsernameValidators } from './username.validators';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
function SignupFormComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 11);
    i0.ɵɵtext(1, " The username or password is invalid. ");
    i0.ɵɵelementEnd();
} }
function SignupFormComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1, "Checking for uniquenes...");
    i0.ɵɵelementEnd();
} }
function SignupFormComponent_div_8_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1, "Username is Required");
    i0.ɵɵelementEnd();
} }
function SignupFormComponent_div_8_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r5 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" Username should be minimum ", ctx_r5.username == null ? null : ctx_r5.username.errors == null ? null : ctx_r5.username.errors.minlength.requiredLength, " charachters ");
} }
function SignupFormComponent_div_8_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1, " Name can't contain space ");
    i0.ɵɵelementEnd();
} }
function SignupFormComponent_div_8_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1, "Name must be unique");
    i0.ɵɵelementEnd();
} }
function SignupFormComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 12);
    i0.ɵɵtemplate(1, SignupFormComponent_div_8_div_1_Template, 2, 0, "div", 6)(2, SignupFormComponent_div_8_div_2_Template, 2, 1, "div", 6)(3, SignupFormComponent_div_8_div_3_Template, 2, 0, "div", 6)(4, SignupFormComponent_div_8_div_4_Template, 2, 0, "div", 6);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.username == null ? null : ctx_r2.username.errors == null ? null : ctx_r2.username.errors.required);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.username == null ? null : ctx_r2.username.errors == null ? null : ctx_r2.username.errors.minlength);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.username == null ? null : ctx_r2.username.errors == null ? null : ctx_r2.username.errors.cannotContainSpace);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.username == null ? null : ctx_r2.username.errors == null ? null : ctx_r2.username.errors.shouldBeUnique);
} }
function SignupFormComponent_div_13_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1, "Password is Required");
    i0.ɵɵelementEnd();
} }
function SignupFormComponent_div_13_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r9 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" Password should be minimum ", ctx_r9.password == null ? null : ctx_r9.password.errors == null ? null : ctx_r9.password.errors.minlength.requiredLength, " charachters ");
} }
function SignupFormComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 12);
    i0.ɵɵtemplate(1, SignupFormComponent_div_13_div_1_Template, 2, 0, "div", 6)(2, SignupFormComponent_div_13_div_2_Template, 2, 1, "div", 6);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r3.password == null ? null : ctx_r3.password.errors == null ? null : ctx_r3.password.errors.required);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r3.password == null ? null : ctx_r3.password.errors == null ? null : ctx_r3.password.errors.minlength);
} }
export class SignupFormComponent {
    constructor() {
        this.form = new FormGroup({
            account: new FormGroup({
                username: new FormControl('', [
                    Validators.required,
                    Validators.minLength(3),
                    UsernameValidators.cannotContainSpace,
                ], UsernameValidators.shouldBeUnique),
                password: new FormControl('', [
                    Validators.required,
                    Validators.minLength(8),
                ]),
            }),
        });
        this.username = this.form.get('account.username');
        this.password = this.form.get('account.password');
    }
    log(obj) {
        console.log(obj);
    }
    login() {
        this.form.setErrors({
            invalidLogin: true,
        });
    }
    static { this.ɵfac = function SignupFormComponent_Factory(t) { return new (t || SignupFormComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: SignupFormComponent, selectors: [["signup-form"]], standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 16, vars: 5, consts: [[3, "formGroup", "ngSubmit"], ["class", "alert alert-danger", 4, "ngIf"], ["formGroupName", "account"], [1, "form-group"], ["for", "username"], ["formControlName", "username", "id", "username", "type", "text", 1, "form-control"], [4, "ngIf"], ["class", "alert alert-danger mt-2", 4, "ngIf"], ["for", "password"], ["formControlName", "password", "id", "password", "type", "text", 1, "form-control"], ["type", "submit", 1, "btn", "btn-primary", "mt-4"], [1, "alert", "alert-danger"], [1, "alert", "alert-danger", "mt-2"]], template: function SignupFormComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "form", 0);
            i0.ɵɵlistener("ngSubmit", function SignupFormComponent_Template_form_ngSubmit_0_listener() { return ctx.login(); });
            i0.ɵɵtemplate(1, SignupFormComponent_div_1_Template, 2, 0, "div", 1);
            i0.ɵɵelementStart(2, "div", 2)(3, "div", 3)(4, "label", 4);
            i0.ɵɵtext(5, "Username");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(6, "input", 5);
            i0.ɵɵtemplate(7, SignupFormComponent_div_7_Template, 2, 0, "div", 6)(8, SignupFormComponent_div_8_Template, 5, 4, "div", 7);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(9, "div", 3)(10, "label", 8);
            i0.ɵɵtext(11, "Password");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(12, "input", 9);
            i0.ɵɵtemplate(13, SignupFormComponent_div_13_Template, 3, 2, "div", 7);
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(14, "button", 10);
            i0.ɵɵtext(15, "Sign Up");
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            i0.ɵɵproperty("formGroup", ctx.form);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.form.errors);
            i0.ɵɵadvance(6);
            i0.ɵɵproperty("ngIf", ctx.username == null ? null : ctx.username.pending);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", (ctx.username == null ? null : ctx.username.touched) && (ctx.username == null ? null : ctx.username.invalid));
            i0.ɵɵadvance(5);
            i0.ɵɵproperty("ngIf", (ctx.password == null ? null : ctx.password.touched) && (ctx.password == null ? null : ctx.password.invalid));
        } }, dependencies: [FormsModule, i1.ɵNgNoValidate, i1.DefaultValueAccessor, i1.NgControlStatus, i1.NgControlStatusGroup, ReactiveFormsModule, i1.FormGroupDirective, i1.FormControlName, i1.FormGroupName, NgIf, CommonModule] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SignupFormComponent, [{
        type: Component,
        args: [{ imports: [FormsModule, ReactiveFormsModule, NgIf, CommonModule], standalone: true, selector: 'signup-form', template: "<form [formGroup]=\"form\" (ngSubmit)=\"login()\">\n  <div *ngIf=\"form.errors\" class=\"alert alert-danger\">\n    The username or password is invalid.\n  </div>\n  <div formGroupName=\"account\">\n    <div class=\"form-group\">\n      <label for=\"username\">Username</label>\n      <input\n        formControlName=\"username\"\n        id=\"username\"\n        type=\"text\"\n        class=\"form-control\"\n      />\n      <div *ngIf=\"username?.pending\">Checking for uniquenes...</div>\n      <div\n        class=\"alert alert-danger mt-2\"\n        *ngIf=\"username?.touched && username?.invalid\"\n      >\n        <div *ngIf=\"username?.errors?.required\">Username is Required</div>\n        <div *ngIf=\"username?.errors?.minlength\">\n          Username should be minimum\n          {{ username?.errors?.minlength.requiredLength }}\n          charachters\n        </div>\n        <div *ngIf=\"username?.errors?.cannotContainSpace\">\n          Name can't contain space\n        </div>\n        <div *ngIf=\"username?.errors?.shouldBeUnique\">Name must be unique</div>\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"password\">Password</label>\n      <input\n        formControlName=\"password\"\n        id=\"password\"\n        type=\"text\"\n        class=\"form-control\"\n      />\n      <div\n        class=\"alert alert-danger mt-2\"\n        *ngIf=\"password?.touched && password?.invalid\"\n      >\n        <div *ngIf=\"password?.errors?.required\">Password is Required</div>\n        <div *ngIf=\"password?.errors?.minlength\">\n          Password should be minimum\n          {{ password?.errors?.minlength.requiredLength }}\n          charachters\n        </div>\n      </div>\n    </div>\n  </div>\n  <button class=\"btn btn-primary mt-4\" type=\"submit\">Sign Up</button>\n</form>\n" }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(SignupFormComponent, { className: "SignupFormComponent", filePath: "src\\app\\signup-form\\signup-form.component.ts", lineNumber: 19 }); })();
//# sourceMappingURL=signup-form.component.js.map