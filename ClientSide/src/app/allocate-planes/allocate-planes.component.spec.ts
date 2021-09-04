import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllocatePlanesComponent } from './allocate-planes.component';

describe('AllocatePlanesComponent', () => {
  let component: AllocatePlanesComponent;
  let fixture: ComponentFixture<AllocatePlanesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllocatePlanesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllocatePlanesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
