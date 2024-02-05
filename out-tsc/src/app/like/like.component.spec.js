import { TestBed } from '@angular/core/testing';
import { LikeComponent } from './like.component';
describe('LikeComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [LikeComponent]
        })
            .compileComponents();
        fixture = TestBed.createComponent(LikeComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=like.component.spec.js.map