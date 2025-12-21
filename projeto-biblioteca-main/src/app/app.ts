import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LivrosComponent } from './livros/livros';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, LivrosComponent],
  template: `<app-livros></app-livros>`
})
export class AppComponent {}
