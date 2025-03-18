import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { Category, CategoryService } from '@aldanetech/accounting-api-client-angular';

@Component({
  selector: 'app-form-category',
  templateUrl: './form-category.component.html',
  styleUrl: './form-category.component.scss'
})
export class FormCategoryComponent {

  @Output() categoryCreated = new EventEmitter<string>();
  @Input() category: Category | null = null;

  display: boolean = false;
  name: string = '';
  comment: string = '';
  isEdit: boolean = false;

  constructor(private categoryService: CategoryService){}
  
  ngOnChanges(changes: SimpleChanges): void {
    if(changes['category'] && changes['category'].currentValue !== null && !changes['category'].firstChange){
      console.log('category', this.category);
      this.isEdit = true;
      this.display = true;
      this.name = this.category?.name || '';
      this.comment = this.category?.comment || '';
    }
  }

  closeDialog() {
    this.display = false;
    this.isEdit = false;
  }

  addCategory() {
    this.display = true;
  }

  submitForm() {
    if(this.isEdit){
      let category: Category = {
        id: this.category?.id,
        status: { id: 1},
        name: this.name,
        comment: this.comment
      };
      this.categoryService.updateCategory(category).subscribe({
        next: (object) => {
          this.categoryCreated.emit();
          this.closeDialog();
          this.name = '';
          this.comment = '';
        },
        error: (msg) => {

        }
      })
    }else{
      let category: Category = {
        status: { id: 1},
        name: this.name,
        comment: this.comment
      };
  
      this.categoryService.createCategory(category).subscribe({
        next: (object) => {
          this.categoryCreated.emit();
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
