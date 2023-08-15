import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RopeMakingMachineEighteenFourytMmComponent } from './rope-making-machine-eighteen-fouryt-mm.component';

describe('RopeMakingMachineEighteenFourytMmComponent', () => {
  let component: RopeMakingMachineEighteenFourytMmComponent;
  let fixture: ComponentFixture<RopeMakingMachineEighteenFourytMmComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RopeMakingMachineEighteenFourytMmComponent]
    });
    fixture = TestBed.createComponent(RopeMakingMachineEighteenFourytMmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
