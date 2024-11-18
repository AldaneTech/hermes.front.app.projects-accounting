import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AccountEntry, AccountEntryService, Brand, BrandService, Category, CategoryService, Store, StoreService, Wallet } from '@daxlto/accounting-api-client-angular';

@Component({
  selector: 'app-form-entry',
  templateUrl: './form-entry.component.html',
  styleUrl: './form-entry.component.scss'
})
export class FormEntryComponent {
  
  @Output() accountEntryCreated = new EventEmitter<string>();
  @Input() wallet?: Wallet;

  display: boolean = false;
  brands: Brand[] = [];
  stores: Store[] = [];
  categories: Category[] = [];

  description: string = ''; 
  amount: number = 0; 
  date: string = '';
  selectedCategory: any;
  selectedBrand: any;
  selectedStore: any;

  constructor(private accountEntryService: AccountEntryService, 
    private bradService: BrandService,
    private storeService: StoreService,
    private categoryService: CategoryService
  ){}

  addAccountEntry() {
    this.bradService.getBrands().subscribe((brands) => {
      this.brands = [...brands];
    });
    this.storeService.getStores().subscribe((stores) => {
      this.stores = [...stores];
    });
    this.categoryService.getCategories().subscribe((categories) => {
      this.categories = [...categories];
    });
    this.display = true;
  }

  closeDialog() {
    this.display = false;
  }

  submitForm() {
    let accountEntry: AccountEntry = {
      status: { id: 1},
      amount: this.amount,
      wallet: { id: this.wallet ? this.wallet.id : 0},
      comment: this.description,
      category: { id: this.selectedCategory.id},
      brand: { id: this.selectedBrand?.id},
      store: { id: this.selectedStore?.id},
      date: this.date,
    };

    this.accountEntryService.createAccountEntry(accountEntry).subscribe({
      next: (object) => {
        this.accountEntryCreated.emit("");
        this.closeDialog();

      },
      error: (msg) => {

      }
    })
  }
}
