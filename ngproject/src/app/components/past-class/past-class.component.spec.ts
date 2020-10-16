import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PastClassComponent } from './past-class.component';

describe('PastClassComponent', () => {
  let component: PastClassComponent;
  let fixture: ComponentFixture<PastClassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PastClassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PastClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
