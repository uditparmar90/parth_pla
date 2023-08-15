import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RopeCoilingMachineComponent } from './rope-coiling-machine.component';

describe('RopeCoilingMachineComponent', () => {
  let component: RopeCoilingMachineComponent;
  let fixture: ComponentFixture<RopeCoilingMachineComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RopeCoilingMachineComponent]
    });
    fixture = TestBed.createComponent(RopeCoilingMachineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
