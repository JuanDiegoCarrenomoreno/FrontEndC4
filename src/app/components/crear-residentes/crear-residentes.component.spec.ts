import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearResidentesComponent } from './crear-residentes.component';

describe('CrearResidentesComponent', () => {
  let component: CrearResidentesComponent;
  let fixture: ComponentFixture<CrearResidentesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearResidentesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearResidentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
