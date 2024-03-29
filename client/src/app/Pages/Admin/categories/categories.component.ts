import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../services/product/product.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css',
})
export class CategoriesComponent implements OnInit {
  // create observable for stores the api data and use it directly
  categoryList: any[] = [];
  constructor(private productSrv: ProductService) {}

  ngOnInit(): void {
    this.getCategories();
  }
  getCategories() {
    this.productSrv.getAllCategory().subscribe((res: any) => {
      this.categoryList = res.data;
      // console.log(this.categoryList);
    });
  }
}
