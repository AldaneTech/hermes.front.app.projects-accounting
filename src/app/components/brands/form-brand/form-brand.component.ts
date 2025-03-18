import { Brand, BrandService } from '@aldanetech/accounting-api-client-angular';
import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-form-brand',
  templateUrl: './form-brand.component.html',
  styleUrl: './form-brand.component.scss'
})
export class FormBrandComponent {

  @Output() brandCreated = new EventEmitter<string>();
  @Input() brand: Brand | null = null;

  display: boolean = false;
  name: string = '';
  comment: string = '';
  isEdit: boolean = false;

  constructor(private brandService: BrandService){}
  
  ngOnChanges(changes: SimpleChanges): void {
    if(changes['brand'] && changes['brand'].currentValue !== null && !changes['brand'].firstChange){
      this.isEdit = true;
      this.display = true;
      this.name = this.brand?.name || '';
      this.comment = this.brand?.comment || '';
    }
  }

  closeDialog() {
    this.display = false;
    this.isEdit = false;
  }

  addBrand() {
    this.display = true;
  }

  submitForm() {
    if(this.isEdit){
      let brand: Brand = {
        id: this.brand?.id,
        status: { id: 1},
        name: this.name,
        comment: this.comment
      };
      this.brandService.updateBrand(brand).subscribe({
        next: (object) => {
          this.brandCreated.emit();
          this.closeDialog();
          this.name = '';
          this.comment = '';
        },
        error: (msg) => {
  
        }
      })
    } else {
      let brand: Brand = {
        status: { id: 1},
        name: this.name,
        comment: this.comment
      };
  
      this.brandService.createBrand(brand).subscribe({
        next: (object) => {
          this.brandCreated.emit();
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
