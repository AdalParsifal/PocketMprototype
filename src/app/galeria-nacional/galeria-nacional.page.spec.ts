import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GaleriaNacionalPage } from './galeria-nacional.page';

describe('GaleriaNacionalPage', () => {
  let component: GaleriaNacionalPage;
  let fixture: ComponentFixture<GaleriaNacionalPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(GaleriaNacionalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
