import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonoDanlineExtrusionPlantComponent } from './mono-danline-extrusion-plant.component';

describe('MonoDanlineExtrusionPlantComponent', () => {
  let component: MonoDanlineExtrusionPlantComponent;
  let fixture: ComponentFixture<MonoDanlineExtrusionPlantComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MonoDanlineExtrusionPlantComponent]
    });
    fixture = TestBed.createComponent(MonoDanlineExtrusionPlantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
