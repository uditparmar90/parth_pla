import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RopeMakingMachineFourEightMmComponent } from './rope-making-machine-four-eight-mm.component';

describe('RopeMakingMachineFourEightMmComponent', () => {
  let component: RopeMakingMachineFourEightMmComponent;
  let fixture: ComponentFixture<RopeMakingMachineFourEightMmComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RopeMakingMachineFourEightMmComponent]
    });
    fixture = TestBed.createComponent(RopeMakingMachineFourEightMmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
