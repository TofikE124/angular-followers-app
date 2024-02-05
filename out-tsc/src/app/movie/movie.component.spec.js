import { TestBed } from '@angular/core/testing';
import { MovieComponent } from './movie.component';
describe('MovieComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [MovieComponent]
        })
            .compileComponents();
        fixture = TestBed.createComponent(MovieComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=movie.component.spec.js.map