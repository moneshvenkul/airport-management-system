import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanesDetailsComponent } from './planes-details.component';

describe('PlanesDetailsComponent', () => {
  let component: PlanesDetailsComponent;
  let fixture: ComponentFixture<PlanesDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanesDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
