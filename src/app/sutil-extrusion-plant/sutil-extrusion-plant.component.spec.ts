import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SutilExtrusionPlantComponent } from './sutil-extrusion-plant.component';

describe('SutilExtrusionPlantComponent', () => {
  let component: SutilExtrusionPlantComponent;
  let fixture: ComponentFixture<SutilExtrusionPlantComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SutilExtrusionPlantComponent]
    });
    fixture = TestBed.createComponent(SutilExtrusionPlantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
