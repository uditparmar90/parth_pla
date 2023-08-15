import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlyYarnTwisterComponent } from './ply-yarn-twister.component';

describe('PlyYarnTwisterComponent', () => {
  let component: PlyYarnTwisterComponent;
  let fixture: ComponentFixture<PlyYarnTwisterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlyYarnTwisterComponent]
    });
    fixture = TestBed.createComponent(PlyYarnTwisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
