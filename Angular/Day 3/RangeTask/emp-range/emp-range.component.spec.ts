import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpRangeComponent } from './emp-range.component';

describe('EmpRangeComponent', () => {
  let component: EmpRangeComponent;
  let fixture: ComponentFixture<EmpRangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpRangeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpRangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
