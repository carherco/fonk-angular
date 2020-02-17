import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FonkAloneComponent } from './fonk-alone.component';

describe('FonkAloneComponent', () => {
  let component: FonkAloneComponent;
  let fixture: ComponentFixture<FonkAloneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FonkAloneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FonkAloneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
