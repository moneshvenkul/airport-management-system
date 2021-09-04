import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanesListComponent } from './planes-list.component';

describe('PlanesListComponent', () => {
  let component: PlanesListComponent;
  let fixture: ComponentFixture<PlanesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
