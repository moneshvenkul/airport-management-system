import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditHangarsComponent } from './edit-hangars.component';

describe('EditHangarsComponent', () => {
  let component: EditHangarsComponent;
  let fixture: ComponentFixture<EditHangarsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditHangarsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditHangarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
