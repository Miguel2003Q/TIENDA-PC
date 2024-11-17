import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistahomeComponent } from './vistahome.component';

describe('VistahomeComponent', () => {
  let component: VistahomeComponent;
  let fixture: ComponentFixture<VistahomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VistahomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VistahomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
