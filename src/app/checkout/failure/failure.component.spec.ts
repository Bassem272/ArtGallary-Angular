import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FailureComponent } from './failure.component';

describe('FailureComponent', () => {
  let component: FailureComponent;
  let fixture: ComponentFixture<FailureComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FailureComponent]
    });
    fixture = TestBed.createComponent(FailureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
