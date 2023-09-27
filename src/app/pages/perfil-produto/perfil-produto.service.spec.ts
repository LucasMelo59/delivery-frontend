import { TestBed } from '@angular/core/testing';

import { PerfilProdutoService } from './perfil-produto.service';

describe('PerfilProdutoService', () => {
  let service: PerfilProdutoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PerfilProdutoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
