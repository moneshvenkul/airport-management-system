import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllocatedPlanesListComponent } from './allocated-planes-list.component';

describe('AllocatedPlanesListComponent', () => {
  let component: AllocatedPlanesListComponent;
  let fixture: ComponentFixture<AllocatedPlanesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllocatedPlanesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllocatedPlanesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
