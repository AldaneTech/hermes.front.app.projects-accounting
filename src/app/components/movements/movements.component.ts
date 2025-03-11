import { ChangeDetectorRef, Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { AccountEntry, AccountEntryService, Wallet, WalletService } from '@aldanetech/accounting-api-client-angular';

@Component({
  selector: 'app-movements',
  templateUrl: './movements.component.html',
  styleUrl: './movements.component.scss'
})
export class MovementsComponent implements OnChanges{

  @Input() wallet?: Wallet;
  @Output() refreshWallet = new EventEmitter<void>();
  accountEntries: AccountEntry[] = [];

  constructor(private accountEntryService: AccountEntryService, private cdr: ChangeDetectorRef, private walletService: WalletService){}

  ngAfterViewInit() {
    this.cdr.detectChanges();
  }

  ngOnChanges(changes: SimpleChanges): void {
    let walletId = this.wallet?.id;
    if(changes['wallet'] && changes['wallet'].currentValue !== undefined && walletId !== undefined){
      this.accountEntryService.getAccountEntryByWalletId(walletId).subscribe((entries) => {
        this.accountEntries = [...entries];
      });
    }
  }

  addAccountEntry() {

  }

  accountEntryCreated(data: any){
    let walletId = this.wallet?.id;
    if(walletId !== undefined){
      this.accountEntryService.getAccountEntryByWalletId(walletId).subscribe((entries) => {
        this.accountEntries = [...entries];
        this.refreshWallet.emit();
      });
    }
  }

  deleteEntry(entry: AccountEntry){
    let entryId = entry?.id;
    if(entryId !== undefined){
      this.accountEntryService.deleteAccountEntry(entryId).subscribe(() => {
        this.accountEntries = this.accountEntries.filter((e) => e.id !== entry.id);
        this.refreshWallet.emit();
      });
    }
  }



}
