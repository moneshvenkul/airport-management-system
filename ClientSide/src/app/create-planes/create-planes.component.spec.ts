import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePlanesComponent } from './create-planes.component';

describe('CreatePlanesComponent', () => {
  let component: CreatePlanesComponent;
  let fixture: ComponentFixture<CreatePlanesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatePlanesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatePlanesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
