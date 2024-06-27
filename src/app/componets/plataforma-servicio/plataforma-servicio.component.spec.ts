import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlataformaServicioComponent } from './plataforma-servicio.component';

describe('PlataformaServicioComponent', () => {
  let component: PlataformaServicioComponent;
  let fixture: ComponentFixture<PlataformaServicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlataformaServicioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlataformaServicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
