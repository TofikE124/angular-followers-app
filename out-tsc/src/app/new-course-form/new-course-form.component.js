import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormsModule, Validators, } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
function NewCourseFormComponent_li_5_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "li", 5);
    i0.ɵɵlistener("click", function NewCourseFormComponent_li_5_Template_li_click_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r4); const topic_r2 = restoredCtx.$implicit; const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.remove(topic_r2)); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const topic_r2 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", topic_r2.value, " ");
} }
export class NewCourseFormComponent {
    constructor(fb) {
        this.courseName = '';
        this.form = fb.group({
            name: ['', Validators.required],
            contact: fb.group({
                email: [],
                phone: [],
            }),
            topics: fb.array([]),
        });
        this.topics = this.form.get('topics');
    }
    addTopic(control) {
        this.topics.push(new FormControl(control.value));
        control.value = '';
    }
    remove(control) {
        let index = this.topics.controls.indexOf(control);
        this.topics.removeAt(index);
    }
    static { this.ɵfac = function NewCourseFormComponent_Factory(t) { return new (t || NewCourseFormComponent)(i0.ɵɵdirectiveInject(i1.FormBuilder)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: NewCourseFormComponent, selectors: [["new-course-form"]], standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 6, vars: 1, consts: [[1, "form-group"], [1, "form-control", 3, "keyup.enter"], ["topicInput", ""], [1, "list-group", "mt-4"], ["class", "list-group-item", 3, "click", 4, "ngFor", "ngForOf"], [1, "list-group-item", 3, "click"]], template: function NewCourseFormComponent_Template(rf, ctx) { if (rf & 1) {
            const _r5 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "form")(1, "div", 0)(2, "input", 1, 2);
            i0.ɵɵlistener("keyup.enter", function NewCourseFormComponent_Template_input_keyup_enter_2_listener() { i0.ɵɵrestoreView(_r5); const _r0 = i0.ɵɵreference(3); return i0.ɵɵresetView(ctx.addTopic(_r0)); });
            i0.ɵɵelementEnd()();
            i0.ɵɵelementStart(4, "ul", 3);
            i0.ɵɵtemplate(5, NewCourseFormComponent_li_5_Template, 2, 1, "li", 4);
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            i0.ɵɵadvance(5);
            i0.ɵɵproperty("ngForOf", ctx.topics.controls);
        } }, dependencies: [FormsModule, i1.ɵNgNoValidate, i1.NgControlStatusGroup, i1.NgForm, NgFor] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NewCourseFormComponent, [{
        type: Component,
        args: [{ selector: 'new-course-form', standalone: true, imports: [FormsModule, NgFor], template: "<form>\r\n  <div class=\"form-group\">\r\n    <input\r\n      #topicInput\r\n      (keyup.enter)=\"addTopic(topicInput)\"\r\n      class=\"form-control\"\r\n    />\r\n  </div>\r\n  <ul class=\"list-group mt-4\">\r\n    <li\r\n      (click)=\"remove(topic)\"\r\n      class=\"list-group-item\"\r\n      *ngFor=\"let topic of topics.controls\"\r\n    >\r\n      {{ topic.value }}\r\n    </li>\r\n  </ul>\r\n</form>\r\n" }]
    }], () => [{ type: i1.FormBuilder }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(NewCourseFormComponent, { className: "NewCourseFormComponent", filePath: "src\\app\\new-course-form\\new-course-form.component.ts", lineNumber: 20 }); })();
//# sourceMappingURL=new-course-form.component.js.map