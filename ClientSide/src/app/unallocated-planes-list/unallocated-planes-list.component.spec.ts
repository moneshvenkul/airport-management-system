import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnallocatedPlanesListComponent } from './unallocated-planes-list.component';

describe('UnallocatedPlanesListComponent', () => {
  let component: UnallocatedPlanesListComponent;
  let fixture: ComponentFixture<UnallocatedPlanesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnallocatedPlanesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnallocatedPlanesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
