import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FonkIntegratedValidatorsUiComponent } from './fonk-integrated-validators-ui.component';

describe('FonkIntegratedValidatorsUiComponent', () => {
  let component: FonkIntegratedValidatorsUiComponent;
  let fixture: ComponentFixture<FonkIntegratedValidatorsUiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FonkIntegratedValidatorsUiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FonkIntegratedValidatorsUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
