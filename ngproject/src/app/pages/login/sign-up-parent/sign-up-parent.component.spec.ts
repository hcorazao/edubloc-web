import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignUpParentComponent } from './sign-up-parent.component';

describe('SignupComponent', () => {
  let component: SignUpParentComponent;
  let fixture: ComponentFixture<SignUpParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignUpParentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignUpParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
