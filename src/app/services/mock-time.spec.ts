import { TestBed } from '@angular/core/testing';

import { MockTime } from './mock-time';

describe('MockTime', () => {
  let service: MockTime;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MockTime);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
