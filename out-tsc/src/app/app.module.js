import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { AppErrorHandler } from './common/app-error-handler';
import { AuthorsService } from './services/authors.service';
import { FollowerService } from './services/follower.service';
import { PostService } from './services/post.service';
import * as i0 from "@angular/core";
export class AppModule {
    static { this.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); }; }
    static { this.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: AppModule }); }
    static { this.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ providers: [
            PostService,
            FollowerService,
            AuthorsService,
            {
                provide: ErrorHandler,
                useClass: AppErrorHandler,
            },
        ], imports: [HttpClientModule, CommonModule] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AppModule, [{
        type: NgModule,
        args: [{
                providers: [
                    PostService,
                    FollowerService,
                    AuthorsService,
                    {
                        provide: ErrorHandler,
                        useClass: AppErrorHandler,
                    },
                ],
                imports: [HttpClientModule, CommonModule],
                bootstrap: [],
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(AppModule, { imports: [HttpClientModule, CommonModule] }); })();
//# sourceMappingURL=app.module.js.map