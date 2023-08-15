import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RopeMakingMachineSixTwelveMmComponent } from './rope-making-machine-six-twelve-mm.component';

describe('RopeMakingMachineSixTwelveMmComponent', () => {
  let component: RopeMakingMachineSixTwelveMmComponent;
  let fixture: ComponentFixture<RopeMakingMachineSixTwelveMmComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RopeMakingMachineSixTwelveMmComponent]
    });
    fixture = TestBed.createComponent(RopeMakingMachineSixTwelveMmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
