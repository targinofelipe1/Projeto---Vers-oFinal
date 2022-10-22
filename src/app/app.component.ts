import { Component } from '@angular/core';
import { Produto } from '../shared/model/produto';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  titulo = 'Food Review';
}
