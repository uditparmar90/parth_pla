import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InflowTwisterComponent } from './inflow-twister.component';

describe('InflowTwisterComponent', () => {
  let component: InflowTwisterComponent;
  let fixture: ComponentFixture<InflowTwisterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InflowTwisterComponent]
    });
    fixture = TestBed.createComponent(InflowTwisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
