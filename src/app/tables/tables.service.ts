import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { ITable } from './table.model';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TablesService {
  http = inject(HttpClient)

  constructor() { }

  getTablesData(num : number){
    return this.http.get<ITable[]>('https://run.mocky.io/v3/53923ca1-98ac-4ce3-a47c-b0af3108de3e')
      .pipe(map((result)=>result.slice(1,num)))
  }
}
