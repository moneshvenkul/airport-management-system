import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPilotsComponent } from './edit-pilots.component';

describe('EditPilotsComponent', () => {
  let component: EditPilotsComponent;
  let fixture: ComponentFixture<EditPilotsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditPilotsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPilotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
