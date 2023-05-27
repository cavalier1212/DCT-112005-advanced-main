import { TablesService } from './tables.service';
import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { ITable } from './table.model';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap } from 'rxjs';

@Component({
  selector: 'app-tables',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})
export class TablesComponent implements OnInit {
  route = inject(ActivatedRoute);
  http = inject(HttpClient);
  tablesService = inject(TablesService);
  data: ITable[] = []
  $data = this.getData()

  ngOnInit(): void {

    // type 1
    // 重構
    this.route.queryParamMap
      .pipe(map(params => +(params.get('num') || '10')),
        switchMap(num => this.tablesService.getTablesData(num))
      ).subscribe(data => {
        this.data = data;
      })


    // this.route.queryParamMap.subscribe((params) => {
    //   this.http.get<ITable[]>('https://run.mocky.io/v3/53923ca1-98ac-4ce3-a47c-b0af3108de3e').subscribe(result => {
    //     this.data = result.slice(1, +(params.get('num') || '10'))
    //   })
    // })

  }


  getData() {
    // type 2
    // 重構
    return this.route.queryParamMap
      .pipe(map(params => +(params.get('num') || '10')),
        switchMap(num => this.tablesService.getTablesData(num))
      )
  }

}
