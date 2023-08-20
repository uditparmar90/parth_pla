import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormQuoteComponent } from './form-quote.component';

describe('FormQuoteComponent', () => {
  let component: FormQuoteComponent;
  let fixture: ComponentFixture<FormQuoteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormQuoteComponent]
    });
    fixture = TestBed.createComponent(FormQuoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
