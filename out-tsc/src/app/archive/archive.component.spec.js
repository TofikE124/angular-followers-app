import { TestBed } from '@angular/core/testing';
import { ArchiveComponent } from './archive.component';
describe('ArchiveComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [ArchiveComponent]
        })
            .compileComponents();
        fixture = TestBed.createComponent(ArchiveComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=archive.component.spec.js.map