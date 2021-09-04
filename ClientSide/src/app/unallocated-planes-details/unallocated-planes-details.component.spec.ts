import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnallocatedPlanesDetailsComponent } from './unallocated-planes-details.component';

describe('UnallocatedPlanesDetailsComponent', () => {
  let component: UnallocatedPlanesDetailsComponent;
  let fixture: ComponentFixture<UnallocatedPlanesDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnallocatedPlanesDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnallocatedPlanesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
