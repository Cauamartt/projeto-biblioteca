import { Component, ChangeDetectorRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LivrosService } from '../services/livros';
import { RouterModule } from '@angular/router';

declare var bootstrap: any;

@Component({
  selector: 'app-livros',
  standalone: true,
  imports: [FormsModule, RouterModule],
  templateUrl: './livros.html',
  styleUrls: ['./livros.css']
})

export class LivrosComponent {
  
  livros: any[] = [];
  erro = false;
  termoBusca = '';
  
  constructor(
    private livrosService: LivrosService,
    private cdr: ChangeDetectorRef
  ) {
    this.livrosService.getLivros().subscribe({
      next: (dados) => {
        this.livros = dados;
        this.cdr.detectChanges(); 
      },
      error: () => {
        this.erro = true;
      }
    });
  }

  get livrosFiltrados() {
    if (!this.termoBusca) {
    return this.livros;
  }

  return this.livros.filter(livro =>
    livro.titulo.toLowerCase().includes(this.termoBusca.toLowerCase()) ||
    livro.autor.toLowerCase().includes(this.termoBusca.toLowerCase())
  );
  }

confirmarReserva(livro: any, form: any) {
  if (form.invalid) return;

  livro.exemplares_disponiveis--;
  alert('Reserva confirmada!');

  const modalElement = document.getElementById('modal' + livro.isbn);

  if (modalElement) {
    const modal =
      bootstrap.Modal.getInstance(modalElement) ||
      new bootstrap.Modal(modalElement);

    modal.hide();
  }

  form.resetForm();
}




}
