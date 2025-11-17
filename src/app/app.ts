import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Api } from './services/api';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('frontend_blog');
   private api = inject(Api);

  status: any;
  hello: any;

  ngOnInit(): void {
    this.api.getStatus().subscribe(res => this.status = res);
    this.api.getHello().subscribe(res => this.hello = res);
  }
}
