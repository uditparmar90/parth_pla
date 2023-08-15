import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PpHdpeMonofilamentExtrusionYarnPlantComponent } from './pp-hdpe-monofilament-extrusion-yarn-plant.component';

describe('PpHdpeMonofilamentExtrusionYarnPlantComponent', () => {
  let component: PpHdpeMonofilamentExtrusionYarnPlantComponent;
  let fixture: ComponentFixture<PpHdpeMonofilamentExtrusionYarnPlantComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PpHdpeMonofilamentExtrusionYarnPlantComponent]
    });
    fixture = TestBed.createComponent(PpHdpeMonofilamentExtrusionYarnPlantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
