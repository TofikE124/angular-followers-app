import { CommonModule, NgFor, NgIf, NgSwitchCase } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { AuthorsComponent } from './authors/authors.component';
import { BootstrapCardComponent } from './bootstrap-card/bootstrap-card.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { CourseFormComponent } from './course-form/course-form.component';
import { FollowersComponent } from './followers-component/followers.component';
import { HomeComponent } from './home/home.component';
import { InputFormatDirective } from './input-format.directive';
import { LikeComponent } from './like/like.component';
import { MovieComponent } from './movie/movie.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NewCourseFormComponent } from './new-course-form/new-course-form.component';
import { PostsComponent } from './posts/posts.component';
import { ProfileComponent } from './profile/profile.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { StarComponent } from './star/star.component';
import { ZippyComponent } from './zippy/zippy.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ArchivesComponent } from './archives/archives.component';
import { ArchiveComponent } from './archive/archive.component';
import * as i0 from "@angular/core";
export class AppComponent {
    static { this.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AppComponent, selectors: [["app-root"]], standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelement(0, "navbar")(1, "router-outlet");
        } }, dependencies: [RouterOutlet,
            RouterModule,
            CommonModule,
            NavbarComponent] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AppComponent, [{
        type: Component,
        args: [{ selector: 'app-root', standalone: true, imports: [
                    RouterOutlet,
                    RouterModule,
                    ArchivesComponent,
                    ArchiveComponent,
                    SignupFormComponent,
                    NotFoundComponent,
                    FollowersComponent,
                    ProfileComponent,
                    PostsComponent,
                    ResetPasswordComponent,
                    ContactFormComponent,
                    NewCourseFormComponent,
                    CourseFormComponent,
                    ZippyComponent,
                    InputFormatDirective,
                    CommonModule,
                    NgIf,
                    NgFor,
                    NgSwitchCase,
                    AuthorsComponent,
                    StarComponent,
                    MovieComponent,
                    BootstrapCardComponent,
                    LikeComponent,
                    NavbarComponent,
                    HomeComponent,
                ], template: "<navbar />\r\n<router-outlet></router-outlet>\r\n" }]
    }], null, null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(AppComponent, { className: "AppComponent", filePath: "src\\app\\app.component.ts", lineNumber: 59 }); })();
//# sourceMappingURL=app.component.js.map