import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule, Validators, } from '@angular/forms';
import { PasswordValidator } from './password.validators';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@angular/common";
function ResetPasswordComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1, "Checking old password...");
    i0.ɵɵelementEnd();
} }
function ResetPasswordComponent_div_6_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1, "Old Password is Required");
    i0.ɵɵelementEnd();
} }
function ResetPasswordComponent_div_6_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1, "Invalid Old Password");
    i0.ɵɵelementEnd();
} }
function ResetPasswordComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 13);
    i0.ɵɵtemplate(1, ResetPasswordComponent_div_6_div_1_Template, 2, 0, "div", 4)(2, ResetPasswordComponent_div_6_div_2_Template, 2, 0, "div", 4);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.oldPassword.errors == null ? null : ctx_r1.oldPassword.errors.required);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.oldPassword.errors == null ? null : ctx_r1.oldPassword.errors.oldPassword);
} }
function ResetPasswordComponent_div_11_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1, "New Password is Required");
    i0.ɵɵelementEnd();
} }
function ResetPasswordComponent_div_11_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r8 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" Password Minlength is ", ctx_r8.newPassword.errors == null ? null : ctx_r8.newPassword.errors.minlength.requiredLength, " charachters ");
} }
function ResetPasswordComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 13);
    i0.ɵɵtemplate(1, ResetPasswordComponent_div_11_div_1_Template, 2, 0, "div", 4)(2, ResetPasswordComponent_div_11_div_2_Template, 2, 1, "div", 4);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.newPassword.errors == null ? null : ctx_r2.newPassword.errors.required);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.newPassword.errors == null ? null : ctx_r2.newPassword.errors.minlength);
} }
function ResetPasswordComponent_div_16_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1, " New Password is Required ");
    i0.ɵɵelementEnd();
} }
function ResetPasswordComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 13);
    i0.ɵɵtemplate(1, ResetPasswordComponent_div_16_div_1_Template, 2, 0, "div", 4);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r3.confirmPassword.errors == null ? null : ctx_r3.confirmPassword.errors.required);
} }
function ResetPasswordComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 14);
    i0.ɵɵtext(1, " Passwords don't Match. ");
    i0.ɵɵelementEnd();
} }
export class ResetPasswordComponent {
    constructor(fb) {
        this.form = fb.group({
            oldPassword: [
                '',
                [Validators.required],
                [PasswordValidator.oldPasswordCorrect],
            ],
            newPassword: ['', [Validators.required, Validators.minLength(4)]],
            confirmPassword: ['', [Validators.required]],
        }, { validators: PasswordValidator.passwordsMatch });
        this.oldPassword = this.form.get('oldPassword');
        this.newPassword = this.form.get('newPassword');
        this.confirmPassword = this.form.get('confirmPassword');
    }
    static { this.ɵfac = function ResetPasswordComponent_Factory(t) { return new (t || ResetPasswordComponent)(i0.ɵɵdirectiveInject(i1.FormBuilder)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ResetPasswordComponent, selectors: [["reset-password"]], standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 20, vars: 6, consts: [[3, "formGroup"], [1, "form-group", "mb-2"], ["for", "oldPassword"], ["formControlName", "oldPassword", "type", "password", "id", "oldPassword", 1, "form-control"], [4, "ngIf"], ["class", "alert alert-danger mt-1", 4, "ngIf"], ["for", "newPassword"], ["formControlName", "newPassword", "type", "password", "id", "newPassword", 1, "form-control"], [1, "form-group", "mb-4"], ["for", "confirmPassword"], ["formControlName", "confirmPassword", "type", "password", "id", "confirmPassword", 1, "form-control"], ["class", "alert alert-danger", 4, "ngIf"], ["type", "submit", 1, "btn", "btn-primary"], [1, "alert", "alert-danger", "mt-1"], [1, "alert", "alert-danger"]], template: function ResetPasswordComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "form", 0)(1, "div", 1)(2, "label", 2);
            i0.ɵɵtext(3, "Old Password");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(4, "input", 3);
            i0.ɵɵtemplate(5, ResetPasswordComponent_div_5_Template, 2, 0, "div", 4)(6, ResetPasswordComponent_div_6_Template, 3, 2, "div", 5);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(7, "div", 1)(8, "label", 6);
            i0.ɵɵtext(9, "New Password");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(10, "input", 7);
            i0.ɵɵtemplate(11, ResetPasswordComponent_div_11_Template, 3, 2, "div", 5);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(12, "div", 8)(13, "label", 9);
            i0.ɵɵtext(14, "Confirm Password");
            i0.ɵɵelementEnd();
            i0.ɵɵelement(15, "input", 10);
            i0.ɵɵtemplate(16, ResetPasswordComponent_div_16_Template, 2, 1, "div", 5);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(17, ResetPasswordComponent_div_17_Template, 2, 0, "div", 11);
            i0.ɵɵelementStart(18, "button", 12);
            i0.ɵɵtext(19, "Submit");
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            i0.ɵɵproperty("formGroup", ctx.form);
            i0.ɵɵadvance(5);
            i0.ɵɵproperty("ngIf", ctx.form.pending && ctx.form.touched);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.oldPassword.touched && ctx.oldPassword.invalid);
            i0.ɵɵadvance(5);
            i0.ɵɵproperty("ngIf", ctx.newPassword.touched && ctx.newPassword.invalid);
            i0.ɵɵadvance(5);
            i0.ɵɵproperty("ngIf", ctx.confirmPassword.touched && ctx.confirmPassword.invalid && !(ctx.confirmPassword.errors == null ? null : ctx.confirmPassword.errors.passwordsMatch));
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", (ctx.form.errors == null ? null : ctx.form.errors.passwordsMatch) && ctx.confirmPassword.valid && ctx.newPassword.valid);
        } }, dependencies: [ReactiveFormsModule, i1.ɵNgNoValidate, i1.DefaultValueAccessor, i1.NgControlStatus, i1.NgControlStatusGroup, i1.FormGroupDirective, i1.FormControlName, CommonModule, i2.NgIf] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ResetPasswordComponent, [{
        type: Component,
        args: [{ selector: 'reset-password', standalone: true, imports: [ReactiveFormsModule, CommonModule], template: "<form [formGroup]=\"form\">\r\n  <div class=\"form-group mb-2\">\r\n    <label for=\"oldPassword\">Old Password</label>\r\n    <input\r\n      formControlName=\"oldPassword\"\r\n      type=\"password\"\r\n      class=\"form-control\"\r\n      id=\"oldPassword\"\r\n    />\r\n    <div *ngIf=\"form.pending && form.touched\">Checking old password...</div>\r\n    <div\r\n      class=\"alert alert-danger mt-1\"\r\n      *ngIf=\"oldPassword.touched && oldPassword.invalid\"\r\n    >\r\n      <div *ngIf=\"oldPassword.errors?.required\">Old Password is Required</div>\r\n      <div *ngIf=\"oldPassword.errors?.oldPassword\">Invalid Old Password</div>\r\n    </div>\r\n  </div>\r\n  <div class=\"form-group mb-2\">\r\n    <label for=\"newPassword\">New Password</label>\r\n    <input\r\n      formControlName=\"newPassword\"\r\n      type=\"password\"\r\n      class=\"form-control\"\r\n      id=\"newPassword\"\r\n    />\r\n    <div\r\n      class=\"alert alert-danger mt-1\"\r\n      *ngIf=\"newPassword.touched && newPassword.invalid\"\r\n    >\r\n      <div *ngIf=\"newPassword.errors?.required\">New Password is Required</div>\r\n      <div *ngIf=\"newPassword.errors?.minlength\">\r\n        Password Minlength is\r\n        {{ newPassword.errors?.minlength.requiredLength }} charachters\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"form-group mb-4\">\r\n    <label for=\"confirmPassword\">Confirm Password</label>\r\n    <input\r\n      formControlName=\"confirmPassword\"\r\n      type=\"password\"\r\n      class=\"form-control\"\r\n      id=\"confirmPassword\"\r\n    />\r\n    <div\r\n      class=\"alert alert-danger mt-1\"\r\n      *ngIf=\"\r\n        confirmPassword.touched &&\r\n        confirmPassword.invalid &&\r\n        !confirmPassword.errors?.passwordsMatch\r\n      \"\r\n    >\r\n      <div *ngIf=\"confirmPassword.errors?.required\">\r\n        New Password is Required\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div\r\n    class=\"alert alert-danger\"\r\n    *ngIf=\"\r\n      form.errors?.passwordsMatch && confirmPassword.valid && newPassword.valid\r\n    \"\r\n  >\r\n    Passwords don't Match.\r\n  </div>\r\n  <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\r\n</form>\r\n" }]
    }], () => [{ type: i1.FormBuilder }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ResetPasswordComponent, { className: "ResetPasswordComponent", filePath: "src\\app\\reset-password\\reset-password.component.ts", lineNumber: 20 }); })();
//# sourceMappingURL=reset-password.component.js.map