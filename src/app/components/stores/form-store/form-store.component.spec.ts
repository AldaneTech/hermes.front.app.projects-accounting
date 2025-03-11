import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormStoreComponent } from './form-store.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { TableModule } from 'primeng/table';

describe('FormStoreComponent', () => {
  let component: FormStoreComponent;
  let fixture: ComponentFixture<FormStoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormStoreComponent],
      imports: [HttpClientTestingModule, TableModule, DialogModule, ButtonModule, FormsModule]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
