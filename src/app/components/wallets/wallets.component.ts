import { Component } from '@angular/core';
import { Wallet, WalletService } from '@aldanetech/accounting-api-client-angular';

@Component({
  selector: 'app-wallets',
  templateUrl: './wallets.component.html',
  styleUrl: './wallets.component.scss'
})
export class WalletsComponent {
  
  wallets: Wallet[] = []
  selectedWallet: any;

  constructor(private walletService: WalletService){}

  ngOnInit(): void {  
    this.walletService.getWallets().subscribe((wallets) => {
      this.wallets = wallets;
      this.selectedWallet = this.wallets[0];
    });
  }

  walletCreated(wallet: string){
    this.walletService.getWallets().subscribe((wallets) => {
      this.wallets = wallets;
      for(let i = 0; i < wallets.length; i++){
        if(wallets[i].name === wallet){
          this.selectedWallet = this.wallets[i];
        }
      }
    });
  }
  onWalletChange(event: any) {
  }

  refreshWallet(){
    this.walletService.getWalletById(this.selectedWallet.id).subscribe((wallet) => {
      const index = this.wallets.findIndex(w => w.id === wallet.id);
      if (index !== -1) {
        this.wallets[index] = wallet;
        this.selectedWallet = this.wallets[index];
      }
    });
  }
}
