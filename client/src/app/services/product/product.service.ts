import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Constant } from '../../constants/constant';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  getAllCategory() {
    return this.http.get(
      Constant.API_END_POINT + Constant.METHODS.GET_ALL_CATEGORY
    );
  }
  getAllProducts() {
    return this.http.get(
      Constant.API_END_POINT + Constant.METHODS.GET_ALL_PRODUCTS
    );
  }

  saveProducts(obj: any) {
    return this.http.post(
      Constant.API_END_POINT + Constant.METHODS.CREATE_PRODUCT,
      obj
    );
  }

  updateProduct(id: any, obj: any) {
    return this.http.put(
      Constant.API_END_POINT + Constant.METHODS.UPDATE_PRODUCT + '/' + id,
      obj,
      {
        headers: {
          'content-type': 'application/json',
        },
      }
    );
  }
  deleteProduct(id: any) {
    return this.http.delete(
      Constant.API_END_POINT + Constant.METHODS.DELETE_PRODUCT + '/' + id
    );
  }
}
