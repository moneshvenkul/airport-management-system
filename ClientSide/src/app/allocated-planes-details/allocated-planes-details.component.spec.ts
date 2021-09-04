import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllocatedPlanesDetailsComponent } from './allocated-planes-details.component';

describe('AllocatedPlanesDetailsComponent', () => {
  let component: AllocatedPlanesDetailsComponent;
  let fixture: ComponentFixture<AllocatedPlanesDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllocatedPlanesDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllocatedPlanesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
