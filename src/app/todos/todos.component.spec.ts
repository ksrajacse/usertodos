/* tslint:disable:no-unused-variable */

import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { Router, ActivatedRoute } from '@angular/router';

import { TodosComponent } from './todos.component';
import { TodosService } from '../shared';
import { RouterOutletStubComponent, RouterStub, ActivatedRouteStub } from '../testing';

class TodosServiceStub {}

let comp: TodosComponent;
let fixture: ComponentFixture<TodosComponent>;

describe('Component: Users', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        RouterOutletStubComponent,
        TodosComponent
      ],
      providers: [
        {provide: TodosService, useClass: TodosServiceStub},
        {provide: ActivatedRoute, useClass: ActivatedRouteStub},
        {provide: Router, useClass: RouterStub},
      ]
    });

    fixture = TestBed
      .overrideComponent(TodosComponent, {set: {template: ''}})
      .createComponent(TodosComponent);

    comp = fixture.componentInstance;
  });

  it('should create an instance', () => {
    expect(comp).toBeTruthy();
  });
});
