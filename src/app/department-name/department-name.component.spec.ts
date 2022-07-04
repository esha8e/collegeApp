import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentNameComponent } from './department-name.component';

describe('DepartmentNameComponent', () => {
  let component: DepartmentNameComponent;
  let fixture: ComponentFixture<DepartmentNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepartmentNameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DepartmentNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
