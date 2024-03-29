import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../../../services/product/product.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent implements OnInit {
  isSidebarVisible: boolean = false;
  productObj: any = {
    productId: 0,
    productSku: '',
    productName: '',
    productPrice: 0,
    productShortName: '',
    productDescription: '',
    createdDate: new Date(),
    deliveryTimeSpan: '',
    categoryId: 0,
    productImgUrl: '',
  };
  categoryList: any[] = [];
  productList: any[] = [];
  isLoading: boolean = false;
  constructor(private productSrv: ProductService) {}
  ngOnInit(): void {
    this.getProducts();
    this.getCategories();
  }
  getCategories() {
    this.productSrv.getAllCategory().subscribe((res: any) => {
      this.categoryList = res.data[0].categories;
      console.log(this.categoryList);
    });
  }

  // get category name
  getCategoryName(categoryId: Number) {
    const category = this.categoryList.find(
      (cate) => cate.categoryId === categoryId
    );
    return category ? category.categoryName : 'unknown';
  }

  onCreate() {
    this.productSrv.saveProducts(this.productObj).subscribe((res: any) => {
      if (!res.data) {
        alert('All fields are required!');
      } else {
        alert('Product Created Successfully');
        console.log(res);
        this.getProducts();
      }
    });
  }
  getProducts() {
    this.isLoading = true;
    this.productSrv.getAllProducts().subscribe((res: any) => {
      // console.log(res);
      this.productList = res;
      this.isLoading = false;
    });
  }

  onUpdate(id: any) {
    this.productSrv.updateProduct(id, this.productObj).subscribe((res: any) => {
      this.getProducts();
      console.log(res);
    });
  }

  onDelete(id: any) {
    if (confirm('Are you sure want to delete this product?')) {
      debugger;
      this.productSrv.deleteProduct(id).subscribe((res: any) => {
        console.log(res);
        this.getProducts();
      });
    }
  }
  closeSidebar() {
    this.isSidebarVisible = false;
  }
  openSidebar() {
    this.isSidebarVisible = true;
  }

  onEdit(item: any) {
    this.productObj = item;
    this.openSidebar();
  }
}
