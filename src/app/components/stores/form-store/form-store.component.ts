import { Store, StoreService } from '@aldanetech/accounting-api-client-angular';
import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-form-store',
  templateUrl: './form-store.component.html',
  styleUrl: './form-store.component.scss'
})
export class FormStoreComponent implements OnChanges{

  @Output() storeCreated = new EventEmitter<string>();
  @Input() store: Store | null = null;

  display: boolean = false;
  name: string = '';
  comment: string = '';
  isEdit: boolean = false;

  constructor(private storeService: StoreService){}
  
  ngOnChanges(changes: SimpleChanges): void {
    if(changes['store'] && changes['store'].currentValue !== null && !changes['store'].firstChange){
      this.isEdit = true;
      this.display = true;
      this.name = this.store?.name || '';
      this.comment = this.store?.comment || '';
    }
  }

  closeDialog() {
    this.display = false;
    this.isEdit = false;
  }

  addStore() {
    this.display = true;
  }

  submitForm() {
    if(this.isEdit){
      let store: Store = {
        id: this.store?.id,
        status: { id: 1},
        name: this.name,
        comment: this.comment
      };
      this.storeService.updateStore(store).subscribe({
        next: (object) => {
          this.storeCreated.emit();
          this.closeDialog();
          this.name = '';
          this.comment = '';
        },
        error: (msg) => {
  
        }
      })
    } else {
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
}
