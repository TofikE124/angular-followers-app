import { Pipe } from "@angular/core";
import * as i0 from "@angular/core";
export class SummaryPipe {
    transform(value, limit) {
        if (!value)
            return null;
        return value.substring(0, limit ?? 50) + "...";
    }
    static { this.ɵfac = function SummaryPipe_Factory(t) { return new (t || SummaryPipe)(); }; }
    static { this.ɵpipe = /*@__PURE__*/ i0.ɵɵdefinePipe({ name: "summary", type: SummaryPipe, pure: true, standalone: true }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SummaryPipe, [{
        type: Pipe,
        args: [{
                name: 'summary',
                standalone: true
            }]
    }], null, null); })();
//# sourceMappingURL=summary.pipe.js.map