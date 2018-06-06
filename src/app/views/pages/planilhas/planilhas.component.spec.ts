import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanilhasComponent } from './planilhas.component';

describe('PlanilhasComponent', () => {
  let component: PlanilhasComponent;
  let fixture: ComponentFixture<PlanilhasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanilhasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanilhasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
