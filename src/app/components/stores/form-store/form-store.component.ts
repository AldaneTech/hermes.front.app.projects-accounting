import { Store, StoreService } from '@aldanetech/accounting-api-client-angular';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-form-store',
  templateUrl: './form-store.component.html',
  styleUrl: './form-store.component.scss'
})
export class FormStoreComponent {

  display: boolean = false;
  name: string = '';
  comment: string = '';
  @Output() storeCreated = new EventEmitter<string>();
  @Input() store?: Store;
  
  constructor(private storeService: StoreService){}
  
  closeDialog() {
    this.display = false;
  }

  addStore() {
    this.display = true;
  }

  submitForm() {
    let store: Store = {
      status: { id: 1},
      name: this.name,
      comment: this.comment
    };

    this.storeService.createStore(store).subscribe({
      next: (object) => {
        this.storeCreated.emit();
        this.closeDialog();
        this.name = '';
        this.comment = '';
      },
      error: (msg) => {

      }
    })
  }
}
