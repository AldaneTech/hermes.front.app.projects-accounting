import { ChangeDetectorRef, Component } from '@angular/core';
import { Category, CategoryService } from '@aldanetech/accounting-api-client-angular';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss'
})
export class CategoriesComponent {

  categories: Category[] = [];
  
  constructor(private categoryService: CategoryService, private cdr: ChangeDetectorRef){
    this.categoryService.getCategories().subscribe((categories) => {
      this.categories = categories;
    });
  }

  updateCategory(category: Category){

  }

  deleteCategory(category: Category){
    let categoryId = category?.id;
    if(categoryId !== undefined){
      this.categoryService.deleteCategory(categoryId).subscribe(() => {
        this.categories = this.categories.filter((c) => c.id !== category.id);
      });
    }
  }

  categoryCreated(data: any){
    this.categoryService.getCategories().subscribe((categories) => {
      this.categories = categories;
    });
  }
}
