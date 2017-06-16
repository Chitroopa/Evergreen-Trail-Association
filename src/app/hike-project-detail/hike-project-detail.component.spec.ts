import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HikeProjectDetailComponent } from './hike-project-detail.component';

describe('HikeProjectDetailComponent', () => {
  let component: HikeProjectDetailComponent;
  let fixture: ComponentFixture<HikeProjectDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HikeProjectDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HikeProjectDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
