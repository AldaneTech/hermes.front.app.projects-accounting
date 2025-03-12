import { Store, StoreService } from '@aldanetech/accounting-api-client-angular';
import { ChangeDetectorRef, Component } from '@angular/core';

@Component({
  selector: 'app-stores',
  templateUrl: './stores.component.html',
  styleUrl: './stores.component.scss'
})
export class StoresComponent {

  stores: Store[] = [];
  selectedStore: Store | null = null;

  constructor(private storeService: StoreService, private cdr: ChangeDetectorRef){
    this.getStores();
  }

  updateStore(store: Store){
    this.selectedStore = store;
  }

  deleteStore(store: Store){
    let storeId = store?.id;
    if(storeId !== undefined){
      this.storeService.deleteStore(storeId).subscribe(() => {
        this.stores = this.stores.filter((c) => c.id !== store.id);
      });
    }
  }

  storeCreated(data: any){
    this.getStores();
  }

  getStores() {
    this.storeService.getStores().subscribe((stores) => {
      this.stores = stores.sort((a, b) => (a.name ?? '').localeCompare(b.name ?? ''));
    });
  }
}
