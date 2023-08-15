import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PpTapeFibrillatedExtrusionPlantComponent } from './pp-tape-fibrillated-extrusion-plant.component';

describe('PpTapeFibrillatedExtrusionPlantComponent', () => {
  let component: PpTapeFibrillatedExtrusionPlantComponent;
  let fixture: ComponentFixture<PpTapeFibrillatedExtrusionPlantComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PpTapeFibrillatedExtrusionPlantComponent]
    });
    fixture = TestBed.createComponent(PpTapeFibrillatedExtrusionPlantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
