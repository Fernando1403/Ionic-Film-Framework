import { Component } from '@angular/core';
import {ISerie} from '../model/ISeries';
import { NavigationExtras, Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(public router:Router,
              public alertController:AlertController,
              public toastController:ToastController) {}

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
    },
    {
      nome: 'Rick e Morty (2013)',
      lancamento: '02/12/2013',
      temporadas: '6',
      classificacao: 9,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/9OAC2sOt38Ni5NNu9tVXLcrAUyh.jpg',
      generos: ['Sci-Fi & Fantasy', 'Action' , 'Adventure'],
      pagina: '/rickandmorty',
      favorito: true
    }
  ];
  exibirSerie(serie:ISerie){
    const navigationExtras: NavigationExtras = {state:{paramSerie:serie}};
    this.router.navigate(['serie-detalhe'],navigationExtras);
  }

  async exibirAlertaFavorito(serie:ISerie){
    const alert = await this.alertController.create({

      header:'Meus Favoritos',
      message: 'Deseja realmente favoritar esta serie ?',
      buttons:[
        {
          text:'Cancelar',
          role:'cancel',
          handler: ()=>{
            serie.favorito=false;
          }
        }, {
          text:'Sim, Favoritar.',
          handler: ()=>{
            serie.favorito=true;
            this.apresentarToast(serie);
          }
        }
      ]
    });
    await alert.present();
  }

  async apresentarToast(serie:ISerie) {
    const toast = await this.toastController.create({
      message:'Serie adicionada aos favoritos...',
      duration: 2000,
      color: 'success',
      buttons:[
        {
          text: 'Desfazer',
          handler: ()=>{
            serie.favorito=false;
          }
        }
      ]
    });
    toast.present();
  }
}
