import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private httpClient: HttpClient) {
  }

  getCharacters(): Observable<any[]> {
    // return this.httpClient.get<any[]>('https://api.sampleapis.com/futurama/characters');
    // return this.httpClient.get<any[]>('https://jsonplaceholder.typicode.com/posts');
    return this.httpClient.get<any[]>('http://localhost:8081/people/getEldAndHelp');
  }

  getInfo(): Observable<any[]> {
    return this.httpClient.get<any[]>('http://localhost:8081/people/getEldAndHelp');
  }

}
