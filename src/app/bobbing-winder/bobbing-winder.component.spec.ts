import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BobbingWinderComponent } from './bobbing-winder.component';

describe('BobbingWinderComponent', () => {
  let component: BobbingWinderComponent;
  let fixture: ComponentFixture<BobbingWinderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BobbingWinderComponent]
    });
    fixture = TestBed.createComponent(BobbingWinderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
