import { Directive, HostListener, Input } from '@angular/core';
import * as i0 from "@angular/core";
export class InputFormatDirective {
    constructor(el) {
        this.el = el;
    }
    onBlur() {
        let element = this.el.nativeElement;
        if (!this.format || this.format === 'lowercase')
            element.value = element.value.toLowerCase();
        else
            element.value = element.value.toUpperCase();
    }
    static { this.ɵfac = function InputFormatDirective_Factory(t) { return new (t || InputFormatDirective)(i0.ɵɵdirectiveInject(i0.ElementRef)); }; }
    static { this.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: InputFormatDirective, selectors: [["", "appInputFormat", ""]], hostBindings: function InputFormatDirective_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("blur", function InputFormatDirective_blur_HostBindingHandler() { return ctx.onBlur(); });
        } }, inputs: { format: [i0.ɵɵInputFlags.None, "appInputFormat", "format"] }, standalone: true }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(InputFormatDirective, [{
        type: Directive,
        args: [{
                selector: '[appInputFormat]',
                standalone: true
            }]
    }], () => [{ type: i0.ElementRef }], { format: [{
            type: Input,
            args: ['appInputFormat']
        }], onBlur: [{
            type: HostListener,
            args: ['blur']
        }] }); })();
//# sourceMappingURL=input-format.directive.js.map