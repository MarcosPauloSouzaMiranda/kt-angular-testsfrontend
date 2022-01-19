import { TestBed } from '@angular/core/testing';

import { LoadingService } from './loading.service';

describe('LoadingService', () => {
  let service: LoadingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoadingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should an open the define fields values', () => {
    service.open('Title', 'Message');
    expect('Title').toBe(service.title);
    expect('Message').toBe(service.message);
    expect(true).toBe(service.isOpen);
  });

  it('should an close the define empty fields', () => {
    service.close()
    expect('').toBe(service.title);
    expect('').toBe(service.message);
    expect(false).toBe(service.isOpen);
  });
});
