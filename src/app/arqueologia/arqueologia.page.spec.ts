import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ArqueologiaPage } from './arqueologia.page';

describe('ArqueologiaPage', () => {
  let component: ArqueologiaPage;
  let fixture: ComponentFixture<ArqueologiaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ArqueologiaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
