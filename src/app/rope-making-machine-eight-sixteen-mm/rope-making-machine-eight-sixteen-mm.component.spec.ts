import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RopeMakingMachineEightSixteenMmComponent } from './rope-making-machine-eight-sixteen-mm.component';

describe('RopeMakingMachineEightSixteenMmComponent', () => {
  let component: RopeMakingMachineEightSixteenMmComponent;
  let fixture: ComponentFixture<RopeMakingMachineEightSixteenMmComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RopeMakingMachineEightSixteenMmComponent]
    });
    fixture = TestBed.createComponent(RopeMakingMachineEightSixteenMmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
