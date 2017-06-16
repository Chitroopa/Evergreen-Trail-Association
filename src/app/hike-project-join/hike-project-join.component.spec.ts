import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HikeProjectJoinComponent } from './hike-project-join.component';

describe('HikeProjectJoinComponent', () => {
  let component: HikeProjectJoinComponent;
  let fixture: ComponentFixture<HikeProjectJoinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HikeProjectJoinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HikeProjectJoinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
