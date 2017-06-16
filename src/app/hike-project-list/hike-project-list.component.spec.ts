import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HikeProjectListComponent } from './hike-project-list.component';

describe('HikeProjectListComponent', () => {
  let component: HikeProjectListComponent;
  let fixture: ComponentFixture<HikeProjectListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HikeProjectListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HikeProjectListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
