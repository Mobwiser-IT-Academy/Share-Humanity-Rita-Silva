import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterNavbarComponent } from './filter-navbar.component';

describe('FilterNavbarComponent', () => {
  let component: FilterNavbarComponent;
  let fixture: ComponentFixture<FilterNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterNavbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
