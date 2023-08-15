import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RopeMakingMachineTwelveTwentyFourMmComponent } from './rope-making-machine-twelve-twenty-four-mm.component';

describe('RopeMakingMachineTwelveTwentyFourMmComponent', () => {
  let component: RopeMakingMachineTwelveTwentyFourMmComponent;
  let fixture: ComponentFixture<RopeMakingMachineTwelveTwentyFourMmComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RopeMakingMachineTwelveTwentyFourMmComponent]
    });
    fixture = TestBed.createComponent(RopeMakingMachineTwelveTwentyFourMmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
