import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarResidentesComponent } from './editar-residentes.component';

describe('EditarResidentesComponent', () => {
  let component: EditarResidentesComponent;
  let fixture: ComponentFixture<EditarResidentesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarResidentesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarResidentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
