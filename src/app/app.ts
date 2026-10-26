import { Component, signal } from '@angular/core';
import { PageFooter } from './page-footer/page-footer';

@Component({
  selector: 'app-root',
  imports: [PageFooter],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  pageTitle: string = 'Product Management System'
  welcomeMessage: string = "Manager your project in one place"
}
