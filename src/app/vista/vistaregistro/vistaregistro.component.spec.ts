import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaregistroComponent } from './vistaregistro.component';

describe('VistaregistroComponent', () => {
  let component: VistaregistroComponent;
  let fixture: ComponentFixture<VistaregistroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VistaregistroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VistaregistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
