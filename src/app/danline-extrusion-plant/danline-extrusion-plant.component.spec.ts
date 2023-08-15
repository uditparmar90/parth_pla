import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DanlineExtrusionPlantComponent } from './danline-extrusion-plant.component';

describe('DanlineExtrusionPlantComponent', () => {
  let component: DanlineExtrusionPlantComponent;
  let fixture: ComponentFixture<DanlineExtrusionPlantComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DanlineExtrusionPlantComponent]
    });
    fixture = TestBed.createComponent(DanlineExtrusionPlantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
