import { ToastrService } from 'ngx-toastr';
import { Component, OnInit, inject } from '@angular/core';
import { ProductService } from '../../../services/product/product.service';
import { CommonModule } from '@angular/common';
import { CategoryService } from '../../../services/category/category.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css',
})
export class CategoriesComponent implements OnInit {
  // create observable for stores the api data and use it directly
  categoryList: any[] = [];
  isSidebarVisible: boolean = false;
  categoryObj: any = {
    categoryId: 0,
    categoryName: '',
  };

  categorySrv = inject(CategoryService);
  toastr = inject(ToastrService);
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
  onOpen() {
    this.isSidebarVisible = true;
  }
  onClose() {
    this.isSidebarVisible = false;
  }
  createCategory() {
    // debugger;
    this.categorySrv
      .createCategories(this.categoryObj)
      .subscribe((res: any) => {
        // debugger;
        this.categoryList = res;
        console.log(res);
        this.toastr.success('Category Created Successfully.');
        this.categoryObj = '';
        this.getCategories();
      });
  }

  deleteCategory(id: any) {
    try {
      if (confirm('Are you sure want to delete?')) {
        this.categorySrv.deleteCategory(id).subscribe((res) => {
          console.log(res);
          this.toastr.success('Category deleted.');
          this.getCategories();
        });
      }
    } catch (error) {
      console.log(error);
      this.toastr.error('Something went wrong!');
    }
  }

  onUpdate(item: any) {
    this.categoryObj = item;
    this.onOpen();
  }

  updateCategory(id: any, obj: any) {
    try {
      this.isSidebarVisible = true;
      this.categorySrv.updateCategory(id, obj).subscribe((res) => {
        this.categoryObj = res;
        this.toastr.success('Category Updated Successfully.');
        console.log(res);
      });
    } catch (error) {
      console.log(error);
      this.toastr.error('Internal Server Error!');
    }
  }
}
