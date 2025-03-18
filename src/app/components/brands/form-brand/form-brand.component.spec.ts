import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormBrandComponent } from './form-brand.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { TableModule } from 'primeng/table';

describe('FormBrandComponent', () => {
  let component: FormBrandComponent;
  let fixture: ComponentFixture<FormBrandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormBrandComponent],
      imports: [HttpClientTestingModule, TableModule, DialogModule, ButtonModule, FormsModule]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormBrandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
