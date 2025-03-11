import { Store, StoreService } from '@aldanetech/accounting-api-client-angular';
import { ChangeDetectorRef, Component } from '@angular/core';

@Component({
  selector: 'app-stores',
  templateUrl: './stores.component.html',
  styleUrl: './stores.component.scss'
})
export class StoresComponent {

  stores: Store[] = [];
  
  constructor(private storeService: StoreService, private cdr: ChangeDetectorRef){
    this.storeService.getStores().subscribe((stores) => {
      this.stores = stores;
    });
  }

  updateStore(store: Store){

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
    this.storeService.getStores().subscribe((stores) => {
      this.stores = stores;
    });
  }
}
