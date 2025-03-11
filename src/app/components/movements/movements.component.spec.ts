import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovementsComponent } from './movements.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { TableModule } from 'primeng/table';
import { FormEntryComponent } from './form-entry/form-entry.component';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';

describe('MovementsComponent', () => {
  let component: MovementsComponent;
  let fixture: ComponentFixture<MovementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MovementsComponent, FormEntryComponent],
      imports: [
        HttpClientTestingModule, 
        RouterTestingModule,   
        ReactiveFormsModule,
        TableModule,
        DialogModule,
        FormsModule,
        ButtonModule,
        DropdownModule
      ]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MovementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
