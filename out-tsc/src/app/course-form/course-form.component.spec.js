import { TestBed } from '@angular/core/testing';
import { CourseFormComponent } from './course-form.component';
describe('CourseFormComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [CourseFormComponent],
        }).compileComponents();
        fixture = TestBed.createComponent(CourseFormComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=course-form.component.spec.js.map