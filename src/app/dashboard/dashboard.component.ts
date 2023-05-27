import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { chartPieDemo } from '../chart-pie-demo';
import { chartAreaDemo } from '../chart-area-demo';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
// default 給路由辨認，預設為此component
export default class DashboardComponent implements OnInit {
  router = inject(Router)

  ngOnInit(): void {
    chartPieDemo();
    chartAreaDemo();
  }

  goToTables() {
    this.router.navigate(['tables'], { queryParams: { num: 3 } })
  }

}
