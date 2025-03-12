import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoresComponent } from './stores.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { TableModule } from 'primeng/table';
import { FormStoreComponent } from './form-store/form-store.component';

describe('StoresComponent', () => {
  let component: StoresComponent;
  let fixture: ComponentFixture<StoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StoresComponent, FormStoreComponent],
      imports: [RouterTestingModule, HttpClientTestingModule, TableModule, DialogModule, ButtonModule, FormsModule]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
