import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HangarsListComponent } from './hangars-list.component';

describe('HangarsListComponent', () => {
  let component: HangarsListComponent;
  let fixture: ComponentFixture<HangarsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HangarsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HangarsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
