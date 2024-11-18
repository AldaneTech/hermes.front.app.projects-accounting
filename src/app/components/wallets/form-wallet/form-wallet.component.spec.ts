import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormWalletComponent } from './form-wallet.component';

describe('FormWalletComponent', () => {
  let component: FormWalletComponent;
  let fixture: ComponentFixture<FormWalletComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormWalletComponent]
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
