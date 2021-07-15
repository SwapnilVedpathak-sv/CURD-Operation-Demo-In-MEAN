import { TestBed } from '@angular/core/testing';

import { ValidateRequestInterceptor } from './validate-request.interceptor';

describe('ValidateRequestInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      ValidateRequestInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: ValidateRequestInterceptor = TestBed.inject(ValidateRequestInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
