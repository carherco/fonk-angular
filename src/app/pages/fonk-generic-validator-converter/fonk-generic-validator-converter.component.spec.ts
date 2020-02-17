import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FonkGenericValidatorConverterComponent } from './fonk-generic-validator-converter.component';

describe('FonkGenericValidatorConverterComponent', () => {
  let component: FonkGenericValidatorConverterComponent;
  let fixture: ComponentFixture<FonkGenericValidatorConverterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FonkGenericValidatorConverterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FonkGenericValidatorConverterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
