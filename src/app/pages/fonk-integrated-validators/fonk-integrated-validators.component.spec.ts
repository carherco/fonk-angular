import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FonkIntegratedValidatorsComponent } from './fonk-integrated-validators.component';

describe('FonkIntegratedValidatorsComponent', () => {
  let component: FonkIntegratedValidatorsComponent;
  let fixture: ComponentFixture<FonkIntegratedValidatorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FonkIntegratedValidatorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FonkIntegratedValidatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
