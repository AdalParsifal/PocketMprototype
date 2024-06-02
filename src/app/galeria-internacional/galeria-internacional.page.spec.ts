import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GaleriaInternacionalPage } from './galeria-internacional.page';

describe('GaleriaInternacionalPage', () => {
  let component: GaleriaInternacionalPage;
  let fixture: ComponentFixture<GaleriaInternacionalPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(GaleriaInternacionalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
