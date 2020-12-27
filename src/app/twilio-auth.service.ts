import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TwilioAuthService {
  constructor(private _http: HttpClient) {}

  public validateRoom(body) {
    const url = 'https://avocado-camel-6067.twil.io/create-token';
    return this._http.post(url, body);
  }
}
