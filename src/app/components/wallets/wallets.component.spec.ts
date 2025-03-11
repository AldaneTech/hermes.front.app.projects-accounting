import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WalletsComponent } from './wallets.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DropdownModule } from 'primeng/dropdown';
import { FormWalletComponent } from './form-wallet/form-wallet.component';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';

describe('WalletsComponent', () => {
  let component: WalletsComponent;
  let fixture: ComponentFixture<WalletsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WalletsComponent, FormWalletComponent],
      imports: [RouterTestingModule, HttpClientTestingModule, DropdownModule, DialogModule, ButtonModule, FormsModule]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WalletsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
