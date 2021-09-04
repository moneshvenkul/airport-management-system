import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HangarsDetailsComponent } from './hangars-details.component';

describe('HangarsDetailsComponent', () => {
  let component: HangarsDetailsComponent;
  let fixture: ComponentFixture<HangarsDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HangarsDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HangarsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
