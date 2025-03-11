import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormEntryComponent } from './form-entry.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';

describe('FormEntryComponent', () => {
  let component: FormEntryComponent;
  let fixture: ComponentFixture<FormEntryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormEntryComponent],
      imports: [RouterTestingModule, HttpClientTestingModule, DialogModule, DropdownModule, ButtonModule, FormsModule]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
