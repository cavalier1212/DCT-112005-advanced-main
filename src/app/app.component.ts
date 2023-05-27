import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,RouterLink],// V15 standalone 後 RouterLink 可以從 RouterModule 獨立出來(其他也是)
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'demo2';

  ngOnInit(): void {
    // chartPieDemo();
    // chartAreaDemo();
  }
}
