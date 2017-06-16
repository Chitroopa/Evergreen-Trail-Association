import { TestBed, inject } from '@angular/core/testing';

import { HikeProjectService } from './hike-project.service';

describe('HikeProjectService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HikeProjectService]
    });
  });

  it('should ...', inject([HikeProjectService], (service: HikeProjectService) => {
    expect(service).toBeTruthy();
  }));
});
