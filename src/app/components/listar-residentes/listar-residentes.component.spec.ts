import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarResidentesComponent } from './listar-residentes.component';

describe('ListarResidentesComponent', () => {
  let component: ListarResidentesComponent;
  let fixture: ComponentFixture<ListarResidentesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarResidentesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarResidentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
