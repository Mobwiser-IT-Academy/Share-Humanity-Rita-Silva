import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IssuesContainerComponent } from './issues-container.component';

describe('IssuesContainerComponent', () => {
  let component: IssuesContainerComponent;
  let fixture: ComponentFixture<IssuesContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IssuesContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IssuesContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
