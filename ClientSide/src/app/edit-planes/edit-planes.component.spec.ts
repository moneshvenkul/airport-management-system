import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPlanesComponent } from './edit-planes.component';

describe('EditPlanesComponent', () => {
  let component: EditPlanesComponent;
  let fixture: ComponentFixture<EditPlanesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditPlanesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPlanesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
