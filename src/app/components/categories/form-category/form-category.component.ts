import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Category, CategoryService } from '@aldanetech/accounting-api-client-angular';

@Component({
  selector: 'app-form-category',
  templateUrl: './form-category.component.html',
  styleUrl: './form-category.component.scss'
})
export class FormCategoryComponent {

  display: boolean = false;
  name: string = '';
  comment: string = '';
  @Output() categoryCreated = new EventEmitter<string>();
  @Input() category?: Category;
  
  constructor(private categoryService: CategoryService){}
  
  closeDialog() {
    this.display = false;
  }

  addCategory() {
    this.display = true;
  }

  submitForm() {
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
