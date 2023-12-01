import { TestBed } from '@angular/core/testing';

import { ConexionBBDDService } from './conexion-bbdd.service';

describe('ConexionBBDDService', () => {
  let service: ConexionBBDDService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConexionBBDDService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
