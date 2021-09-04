import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PilotsDetailsComponent } from './pilots-details.component';

describe('PilotsDetailsComponent', () => {
  let component: PilotsDetailsComponent;
  let fixture: ComponentFixture<PilotsDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PilotsDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PilotsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
