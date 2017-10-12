/* tslint:disable:no-unused-variable */

import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { Router, ActivatedRoute } from '@angular/router';

import { UsersComponent } from './users.component';
import { UsersService } from '../shared';
import { RouterOutletStubComponent, RouterStub, ActivatedRouteStub } from '../testing';

class UsersServiceStub {}

let comp: UsersComponent;
let fixture: ComponentFixture<UsersComponent>;

describe('Component: Users', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        RouterOutletStubComponent,
        UsersComponent
      ],
      providers: [
        {provide: UsersService, useClass: UsersServiceStub},
        {provide: ActivatedRoute, useClass: ActivatedRouteStub},
        {provide: Router, useClass: RouterStub},
      ]
    });

    fixture = TestBed
      .overrideComponent(UsersComponent, {set: {template: ''}})
      .createComponent(UsersComponent);

    comp = fixture.componentInstance;
  });

  it('should create an instance', () => {
    expect(comp).toBeTruthy();
  });
});
