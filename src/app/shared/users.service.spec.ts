/* tslint:disable:no-unused-variable */

import { TestBed, inject } from '@angular/core/testing';
import { Http } from '@angular/http';

import { UsersService } from './users.service';

class HttpStub {}

describe('Service: Users', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        UsersService,
        {provide: Http, useClass: HttpStub}
      ]
    });
  });

  it('should exist', inject([UsersService], (service: UsersService) => {
    expect(service).toBeTruthy();
  }));
});
