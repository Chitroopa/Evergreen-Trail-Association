import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HikeProjectEditComponent } from './hike-project-edit.component';

describe('HikeProjectEditComponent', () => {
  let component: HikeProjectEditComponent;
  let fixture: ComponentFixture<HikeProjectEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HikeProjectEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HikeProjectEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
