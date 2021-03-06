import { Injectable } from '@angular/core';

import {IListItem} from '../const';

import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class InboxService {

  constructor(private http:HttpClient) { }

  fetchItems():Observable<IListItem[]> {
    return this.http.get<IListItem[]>('assets/inbox.json');
  }
}
