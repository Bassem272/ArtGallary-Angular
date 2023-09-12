import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminLogoutComponent } from './admin-logout.component';

describe('AdminLogoutComponent', () => {
  let component: AdminLogoutComponent;
  let fixture: ComponentFixture<AdminLogoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminLogoutComponent]
    });
    fixture = TestBed.createComponent(AdminLogoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
