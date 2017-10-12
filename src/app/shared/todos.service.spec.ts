/* tslint:disable:no-unused-variable */

import { TestBed, inject } from '@angular/core/testing';
import { Http } from '@angular/http';

import { TodosService } from './todos.service';

class HttpStub {}

describe('Service: Users', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        TodosService,
        {provide: Http, useClass: HttpStub}
      ]
    });
  });

  it('should exist', inject([TodosService], (service: TodosService) => {
    expect(service).toBeTruthy();
  }));
});
