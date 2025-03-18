import { Brand, BrandService } from '@aldanetech/accounting-api-client-angular';
import { ChangeDetectorRef, Component } from '@angular/core';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrl: './brands.component.scss'
})
export class BrandsComponent {


  brands: Brand[] = [];
  selectedBrand: Brand | null = null;

  constructor(private brandService: BrandService, private cdr: ChangeDetectorRef){
    this.getBrands();
  }

  updateBrand(brand: Brand){
    this.selectedBrand = brand;
  }

  deleteBrand(brand: Brand){
    let brandId = brand?.id;
    if(brandId !== undefined){
      this.brandService.deleteBrand(brandId).subscribe(() => {
        this.brands = this.brands.filter((c) => c.id !== brand.id);
      });
    }
  }

  brandCreated(data: any){
    this.getBrands();
  }

  getBrands() {
    this.brandService.getBrands().subscribe((brands) => {
      this.brands = brands.sort((a, b) => (a.name ?? '').localeCompare(b.name ?? ''));
    });
  }
}
