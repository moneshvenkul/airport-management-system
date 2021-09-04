import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateHangarComponent } from './create-hangar.component';

describe('CreateHangarComponent', () => {
  let component: CreateHangarComponent;
  let fixture: ComponentFixture<CreateHangarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateHangarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateHangarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
