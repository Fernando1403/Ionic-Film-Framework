import { IAtores } from './../model/IAtores';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor() {}

  ListaAtores: IAtores[] = [
    {
      nome: 'Tom Holland',
      nascimento: '01/06/1996',
      idade: '26',
      LocalDeNascimento: 'England',
      foto: 'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/2bXKtSlrJyzpXs7gTOiCnQJBCBp.jpg',
      genero: ['Masculino'],
      pagina: '/tomholland',
      favorito: true
    },
    {
      nome: 'Jason Statham',
      nascimento: '26/07/1967',
      idade: '55',
      LocalDeNascimento: 'England',
      foto: 'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/whNwkEQYWLFJA8ij0WyOOAD5xhQ.jpg',
      genero: ['Masculino'],
      pagina: '/jasonstatham',
      favorito: false
    },
    {
      nome: 'Melissa McCarthy',
      nascimento: '26/08/1970',
      idade: '52',
      LocalDeNascimento: 'USA',
      foto: 'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/nRNMJlqR33j84cGdB0RxstV3NYm.jpg',
      genero: ['Feminino'],
      pagina: '/melissamccarthy',
      favorito: true
    }
  ];
}
