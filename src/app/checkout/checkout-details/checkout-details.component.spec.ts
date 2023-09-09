import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckoutDetailsComponent } from './checkout-details.component';

describe('CheckoutDetailsComponent', () => {
  let component: CheckoutDetailsComponent;
  let fixture: ComponentFixture<CheckoutDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CheckoutDetailsComponent]
    });
    fixture = TestBed.createComponent(CheckoutDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
