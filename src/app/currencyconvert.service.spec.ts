import { TestBed } from '@angular/core/testing';

import { CurrencyconvertService } from './currencyconvert.service';

describe('CurrencyconvertService', () => {
  let service: CurrencyconvertService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CurrencyconvertService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
