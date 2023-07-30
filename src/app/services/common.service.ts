import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService<E> {
  protected apiUrl: string = '';
  protected apiKey = 'a1043a82-f63f-4960-a1f6-9f73f642c9c6';

  constructor(protected http: HttpClient) { }

  list(): Observable<E[]> {
    const headers = new HttpHeaders({
      'X-API-Key': this.apiKey
    });

    return this.http.get<E[]>(this.apiUrl, { headers: headers});
  }

}
