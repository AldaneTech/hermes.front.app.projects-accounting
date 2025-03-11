import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCategoryComponent } from './form-category.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';

describe('FormCategoryComponent', () => {
  let component: FormCategoryComponent;
  let fixture: ComponentFixture<FormCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormCategoryComponent],
      imports: [RouterTestingModule, HttpClientTestingModule, DialogModule, ButtonModule, FormsModule]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
