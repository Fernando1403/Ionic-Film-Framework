import { Component } from '@angular/core';
import { IFilme } from '../model/IFilme';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(public router:Router) {}

  listaFilmes: IFilme[] = [
    {
      nome: 'Mortal Kombat (2021)',
      lancamento: '15/04/2021',
      duracao: '1h50m',
      classificacao: 7,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/w8BVC3qrCWCiTHRz4Rft12dtQF0.jpg',
      generos: ['Ação', 'Fantasia', 'Aventura'],
      pagina: '/mortal-kombat',
      favorito: false
    },
    {
      nome: 'Vingadores: Ultimato (2019)',
      lancamento: '25/04/2019 (BR)',
      duracao: '3h01m',
      classificacao: 8,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/q6725aR8Zs4IwGMXzZT8aC8lh41.jpg',
      generos: ['Aventura', 'Ficção científica', 'Ação'],
      pagina: '/avengers',
      favorito: false
    },
    {
      nome: 'Gente Grande (2010)',
      lancamento: '24 de setembro de 2010 (BR)',
      duracao: '1h42m',
      classificacao: 6,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/ppU2xJnlKdW3F01AtC9wMuXRZCg.jpg',
      generos: ['Comédia'],
      pagina: '/gentegrande',
      favorito: true
    },
    {
      nome: 'Creed III (2023)',
      lancamento: '02/03/2023 (BR)',
      duracao: '1h56m',
      classificacao: 7,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/wDugyjvDQsuwm9j9hkmK4whCOti.jpg',
      generos: ['Drama','Ação'],
      pagina: '/creedIII',
      favorito: true
    },
    {
      nome: 'Gato de Botas 2: O Último Pedido (2022)',
      lancamento: '05/01/2023 (BR)',
      duracao: '1h43m',
      classificacao: 8,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/i0tScFVNCcgDzz9AgjYd3LDXGTO.jpg',
      generos: ['Animação', 'Família', 'Fantasia', 'Aventura', 'Comédia', 'Drama'],
      pagina: '/gatodebotas',
      favorito: false
    }
  ];

  exibirFilme(filme:IFilme){
    const navigationExtras: NavigationExtras = {state:{paramFilme:filme}};
    this.router.navigate(['filme-detalhe'],navigationExtras);
  }

}
