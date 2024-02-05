import { Pipe } from '@angular/core';
import * as i0 from "@angular/core";
export class MyTitleCasePipe {
    transform(value) {
        if (!value)
            return "";
        let newValue = value.toLowerCase().trim();
        return newValue.split(' ').map((word, index) => (!index ? this.capitalizeWord(word)
            : !this.isPreposition(word) ? this.capitalizeWord(word)
                : word)).join(' ');
    }
    capitalizeWord(word) {
        if (word.length == 1)
            return word.toUpperCase();
        return word[0].toUpperCase() + word.substring(1);
    }
    isPreposition(word) {
        let prepositions = [
            'of', 'the'
        ];
        return prepositions.includes(word);
    }
    static { this.ɵfac = function MyTitleCasePipe_Factory(t) { return new (t || MyTitleCasePipe)(); }; }
    static { this.ɵpipe = /*@__PURE__*/ i0.ɵɵdefinePipe({ name: "myTitleCase", type: MyTitleCasePipe, pure: true, standalone: true }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MyTitleCasePipe, [{
        type: Pipe,
        args: [{
                name: 'myTitleCase',
                standalone: true
            }]
    }], null, null); })();
//# sourceMappingURL=my-title-case.pipe.js.map