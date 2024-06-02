import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HallPage } from './hall.page';

describe('HallPage', () => {
  let component: HallPage;
  let fixture: ComponentFixture<HallPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(HallPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
