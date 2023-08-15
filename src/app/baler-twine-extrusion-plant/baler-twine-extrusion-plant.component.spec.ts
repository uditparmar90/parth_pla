import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BalerTwineExtrusionPlantComponent } from './baler-twine-extrusion-plant.component';

describe('BalerTwineExtrusionPlantComponent', () => {
  let component: BalerTwineExtrusionPlantComponent;
  let fixture: ComponentFixture<BalerTwineExtrusionPlantComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BalerTwineExtrusionPlantComponent]
    });
    fixture = TestBed.createComponent(BalerTwineExtrusionPlantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
