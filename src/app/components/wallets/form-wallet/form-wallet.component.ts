import { Component, EventEmitter, Input, Output } from '@angular/core';
import { WalletService, Wallet } from '@daxlto/accounting-api-client-angular';

@Component({
  selector: 'app-form-wallet',
  templateUrl: './form-wallet.component.html',
  styleUrl: './form-wallet.component.scss'
})
export class FormWalletComponent {
  @Input() wallet?: Wallet;
  @Output() walletCreated = new EventEmitter<string>();
  display: boolean = false;
  isEdit: boolean = false;
  walletName: string = ''; 

  constructor(private walletService: WalletService){}

  showDialog() {
    this.display = true;
  }

  closeDialog() {
    this.display = false;
    this.isEdit = false;
  }

  editWallet(){
    this.display = true;
    this.isEdit = true;
    this.walletName = this.wallet?.name ? this.wallet.name : '';
  }

  deleteWallet(){
    if(this.wallet && this.wallet.id){
      this.walletService.deleteWallet(this.wallet?.id).subscribe({
        next: (object) => {
          this.walletCreated.emit(this.walletName);
        },
        error: (msg) => {
  
        }
      }) 
    }

  }

  submitForm() {
    if(this.isEdit){
      let myWallet: Wallet = {
        id: this.wallet?.id,
        name: this.walletName
      };

      this.walletService.updateWallet(myWallet).subscribe({
        next: (object) => {
          this.closeDialog();
          this.walletCreated.emit(this.walletName);
          this.walletName = "";
        },
        error: (msg) => {

        }
      }) 
    } else {
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
}
