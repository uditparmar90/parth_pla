import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RollWinderComponent } from './roll-winder.component';

describe('RollWinderComponent', () => {
  let component: RollWinderComponent;
  let fixture: ComponentFixture<RollWinderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RollWinderComponent]
    });
    fixture = TestBed.createComponent(RollWinderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
