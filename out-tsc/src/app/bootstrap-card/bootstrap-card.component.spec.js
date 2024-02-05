import { TestBed } from '@angular/core/testing';
import { BootstrapCardComponent } from './bootstrap-card.component';
describe('BootstrapCardComponent', () => {
    let component;
    let fixture;
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [BootstrapCardComponent]
        })
            .compileComponents();
        fixture = TestBed.createComponent(BootstrapCardComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=bootstrap-card.component.spec.js.map