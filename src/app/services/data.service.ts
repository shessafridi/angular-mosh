import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AppError } from '../common/app-error';
import { NotFoundError } from '../common/not-found-error';
import { BadInput } from '../common/bad-input-error';

@Injectable({
  providedIn: 'root',
})
export class DataService<T> {
  constructor(private url: string, private http: HttpClient) {}

  private getHeaders() {
    const token = localStorage.getItem('token');
    if (token)
      return {
        Authorization: 'Bearer ' + localStorage.getItem('token'),
      };
  }

  getAll() {
    return this.http.get<T[]>(this.url).pipe(catchError(this.handleErrors));
  }

  create(body: T) {
    return this.http
      .post(this.url, body, { headers: this.getHeaders() })
      .pipe(catchError(this.handleErrors));
  }

  update(body) {
    return this.http
      .put(this.url + '/' + body.id, body)
      .pipe(catchError(this.handleErrors));
  }

  delete(id) {
    return this.http
      .delete(this.url + '/' + id)
      .pipe(catchError(this.handleErrors));
  }

  private handleErrors(error: Response) {
    if (error.status === 404) return throwError(new NotFoundError());
    if (error.status === 400) return throwError(new BadInput());
    return throwError(new AppError(error));
  }
}
