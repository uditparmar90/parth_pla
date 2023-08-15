import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheezeWinderComponent } from './cheeze-winder.component';

describe('CheezeWinderComponent', () => {
  let component: CheezeWinderComponent;
  let fixture: ComponentFixture<CheezeWinderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CheezeWinderComponent]
    });
    fixture = TestBed.createComponent(CheezeWinderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
