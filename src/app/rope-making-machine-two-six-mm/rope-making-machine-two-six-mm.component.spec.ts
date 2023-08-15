import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RopeMakingMachineTwoSixMmComponent } from './rope-making-machine-two-six-mm.component';

describe('RopeMakingMachineTwoSixMmComponent', () => {
  let component: RopeMakingMachineTwoSixMmComponent;
  let fixture: ComponentFixture<RopeMakingMachineTwoSixMmComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RopeMakingMachineTwoSixMmComponent]
    });
    fixture = TestBed.createComponent(RopeMakingMachineTwoSixMmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
