import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormWalletComponent } from './form-wallet.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';

describe('FormWalletComponent', () => {
  let component: FormWalletComponent;
  let fixture: ComponentFixture<FormWalletComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormWalletComponent],
      imports: [
        ReactiveFormsModule,
        HttpClientTestingModule, 
        RouterTestingModule,
        DialogModule,
        FormsModule,
        ButtonModule
      ]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormWalletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
