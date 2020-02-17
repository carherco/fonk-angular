import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FonkAloneUiComponent } from './fonk-alone-ui.component';

describe('FonkAloneUiComponent', () => {
  let component: FonkAloneUiComponent;
  let fixture: ComponentFixture<FonkAloneUiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FonkAloneUiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FonkAloneUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
