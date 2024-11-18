import { Component, EventEmitter, Output } from '@angular/core';
import { WalletService, Wallet } from '@daxlto/accounting-api-client-angular';

@Component({
  selector: 'app-form-wallet',
  templateUrl: './form-wallet.component.html',
  styleUrl: './form-wallet.component.scss'
})
export class FormWalletComponent {

  @Output() walletCreated = new EventEmitter<string>();
  display: boolean = false;
  walletName: string = ''; 

  constructor(private walletService: WalletService){}

  showDialog() {
    this.display = true;
  }

  closeDialog() {
    this.display = false;
  }

  submitForm() {
    let myWallet: Wallet = {
      status: { id: 1},
      name: this.walletName
    };

    this.walletService.createWallet(myWallet).subscribe({
      next: (object) => {
        this.closeDialog();
        this.walletCreated.emit(this.walletName);
        this.walletName = "";
      },
      error: (msg) => {

      }
    })
  }
}
