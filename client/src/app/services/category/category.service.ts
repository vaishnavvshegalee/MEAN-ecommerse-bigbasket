import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Constant } from '../../constants/constant';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  constructor(private http: HttpClient) {}

  createCategories(obj: any) {
    return this.http.post(
      `${Constant.API_END_POINT}${Constant.METHODS.CREATE_CATEGORY}`,
      obj
    );
  }
  deleteCategory(id: any) {
    return this.http.delete(
      `${Constant.API_END_POINT}${Constant.METHODS.DELETE_CATEGORY}/${id}`
    );
  }
  updateCategory(id: any, obj: any) {
    return this.http.put(
      `${Constant.API_END_POINT}${Constant.METHODS.UPDATE_CATEGORY}/${id}`,
      obj,
      {
        headers: {
          'content-type': 'application/json',
        },
      }
    );
  }
}
