import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PickcolorComponent } from './pickcolor.component';

describe('PickcolorComponent', () => {
  let component: PickcolorComponent;
  let fixture: ComponentFixture<PickcolorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PickcolorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PickcolorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
