import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaloginComponent } from './vistalogin.component';

describe('VistaloginComponent', () => {
  let component: VistaloginComponent;
  let fixture: ComponentFixture<VistaloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VistaloginComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VistaloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
