import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { chartPieDemo } from './chart-pie-demo';
import { chartAreaDemo } from './chart-area-demo';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'demo2';

  ngOnInit(): void {
    chartPieDemo();
    chartAreaDemo();
  }
}
