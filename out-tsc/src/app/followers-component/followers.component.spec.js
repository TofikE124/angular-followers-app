import { TestBed } from '@angular/core/testing';
import { FollowersComponent } from './followers.component';
describe('FollowersComponentComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [FollowersComponent],
        }).compileComponents();
        fixture = TestBed.createComponent(FollowersComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=followers.component.spec.js.map