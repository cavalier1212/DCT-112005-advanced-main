import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { chartPieDemo } from '../chart-pie-demo';
import { chartAreaDemo } from '../chart-area-demo';
import { chartBarDemo } from '../chart-bar-demo';

@Component({
  selector: 'app-charts',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit {
  ngOnInit(): void {
    chartPieDemo();
    chartAreaDemo();
    chartBarDemo();
  }

}
