import { TestBed } from '@angular/core/testing';

import { EnvioCabeceraService } from './envio-cabecera.service';

describe('EnvioCabeceraService', () => {
  let service: EnvioCabeceraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EnvioCabeceraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
