import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { PreOrderServiceModules } from '../pre-order-service.module';
import { environment } from '@env/environment';

import { Observable, of, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: PreOrderServiceModules,
})
export class MediaService {
  private readonly UPLOAD_ENDPOINT = environment.storage_endpoint;

  constructor(private http: HttpClient) {}

  uploadProductImg(payload) {
    const file = new FormData();
    const key = Object.keys(payload);
    for (let i of key) {
      file.append('products', payload[i]);
    }
    return this.http
      .post(`${this.UPLOAD_ENDPOINT}/products`, file)
      .pipe(map((res: { imagesUrl: string[] }) => res.imagesUrl));
  }
}
