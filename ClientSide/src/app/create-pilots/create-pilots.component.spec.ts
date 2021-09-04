import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePilotsComponent } from './create-pilots.component';

describe('CreatePilotsComponent', () => {
  let component: CreatePilotsComponent;
  let fixture: ComponentFixture<CreatePilotsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatePilotsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatePilotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
