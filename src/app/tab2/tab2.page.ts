import { Component } from '@angular/core';
import {ISerie} from '../model/ISeries';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(public router:Router) {}

  ListaSeries: ISerie[] = [
    {
      nome: 'Os 100 (2014)',
      lancamento: '19/03/2014',
      temporadas: '7',
      classificacao: 8,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/cfhfcEt4bOXuVZkTC0nNBpqqiWb.jpg',
      generos: ['Sci-Fi & Fantasy', 'Drama', 'Action' , 'Adventure'],
      pagina: '/the100',
      favorito: true
    },
    {
      nome: 'Peaky Blinders: Sangue, Apostas e Navalhas (2013)',
      lancamento: '12/09/2013',
      temporadas: '6',
      classificacao: 9,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/i0uajcHH9yogXMfDHpOXexIukG9.jpg',
      generos: ['Drama','Crime'],
      pagina: '/peakblinders',
      favorito: false
    },
    {
      nome: 'Control Z (2020)',
      lancamento: '22/05/2020',
      temporadas: '3',
      classificacao: 8,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/8VNA0RdrPk8Ec7XVjpeT0Rnui79.jpg',
      generos: ['Drama'],
      pagina: '/controlz',
      favorito: false
    }
  ];
  exibirSerie(serie:ISerie){
    const navigationExtras: NavigationExtras = {state:{paramSerie:serie}};
    this.router.navigate(['serie-detalhe'],navigationExtras);
  }
}
