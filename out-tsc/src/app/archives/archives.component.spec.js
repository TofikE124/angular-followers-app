import { TestBed } from '@angular/core/testing';
import { ArchivesComponent } from './archives.component';
describe('ArchivesComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [ArchivesComponent]
        })
            .compileComponents();
        fixture = TestBed.createComponent(ArchivesComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=archives.component.spec.js.map