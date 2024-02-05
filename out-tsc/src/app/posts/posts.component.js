import { NgFor } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../services/post.service";
function PostsComponent_li_3_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "li", 4)(1, "button", 5);
    i0.ɵɵlistener("click", function PostsComponent_li_3_Template_button_click_1_listener() { const restoredCtx = i0.ɵɵrestoreView(_r4); const post_r2 = restoredCtx.$implicit; const ctx_r3 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r3.updatePost(post_r2)); });
    i0.ɵɵtext(2, " Update ");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "button", 6);
    i0.ɵɵlistener("click", function PostsComponent_li_3_Template_button_click_3_listener() { const restoredCtx = i0.ɵɵrestoreView(_r4); const post_r2 = restoredCtx.$implicit; const ctx_r5 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r5.deletePost(post_r2)); });
    i0.ɵɵtext(4, " Delete ");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const post_r2 = ctx.$implicit;
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate1(" ", post_r2.title, " ");
} }
export class PostsComponent {
    constructor(service) {
        this.service = service;
        this.posts = [];
        this.postsCount = 0;
    }
    ngOnInit() {
        this.service.getAll().subscribe((response) => {
            this.posts = response;
        });
    }
    createPost(input) {
        let post = {
            id: ++this.postsCount,
            title: input.value,
        };
        this.posts.unshift(post);
        input.value = '';
        this.service.create(post).subscribe((newPost) => {
            post.id = newPost.id;
        }, (error) => {
            console.log('rerrrrrrr');
            this.posts.splice(0, 1);
        });
    }
    updatePost(post) {
        this.service.update(post.id).subscribe((response) => {
            let index = this.posts.indexOf(post);
            this.posts[index] = response;
        });
    }
    deletePost(post) {
        let index = this.posts.indexOf(post);
        this.posts.splice(index, 1);
        this.service.deletePost(post.id).subscribe(null, (error) => {
            this.posts.splice(index, 0, post);
            if (error.status === 404)
                alert('This post has already been deleted.');
            else
                throw error;
        });
    }
    static { this.ɵfac = function PostsComponent_Factory(t) { return new (t || PostsComponent)(i0.ɵɵdirectiveInject(i1.PostService)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PostsComponent, selectors: [["posts"]], standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 4, vars: 1, consts: [["type", "text", 1, "form-control", "mb-4", 3, "keyup.enter"], ["title", ""], [1, "list-group"], ["class", "list-group-item", 4, "ngFor", "ngForOf"], [1, "list-group-item"], [1, "btn", "btn-primary", "btn-sm", "me-2", 3, "click"], [1, "btn", "btn-danger", "btn-sm", 3, "click"]], template: function PostsComponent_Template(rf, ctx) { if (rf & 1) {
            const _r6 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "input", 0, 1);
            i0.ɵɵlistener("keyup.enter", function PostsComponent_Template_input_keyup_enter_0_listener() { i0.ɵɵrestoreView(_r6); const _r0 = i0.ɵɵreference(1); return i0.ɵɵresetView(ctx.createPost(_r0)); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(2, "ul", 2);
            i0.ɵɵtemplate(3, PostsComponent_li_3_Template, 6, 1, "li", 3);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngForOf", ctx.posts);
        } }, dependencies: [HttpClientModule, NgFor] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PostsComponent, [{
        type: Component,
        args: [{ selector: 'posts', standalone: true, imports: [HttpClientModule, NgFor], template: "<input\r\n  #title\r\n  (keyup.enter)=\"createPost(title)\"\r\n  type=\"text\"\r\n  class=\"form-control mb-4\"\r\n/>\r\n<ul class=\"list-group\">\r\n  <li class=\"list-group-item\" *ngFor=\"let post of posts\">\r\n    <button (click)=\"updatePost(post)\" class=\"btn btn-primary btn-sm me-2\">\r\n      Update\r\n    </button>\r\n    <button (click)=\"deletePost(post)\" class=\"btn btn-danger btn-sm\">\r\n      Delete\r\n    </button>\r\n    {{ post.title }}\r\n  </li>\r\n</ul>\r\n" }]
    }], () => [{ type: i1.PostService }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(PostsComponent, { className: "PostsComponent", filePath: "src\\app\\posts\\posts.component.ts", lineNumber: 14 }); })();
//# sourceMappingURL=posts.component.js.map