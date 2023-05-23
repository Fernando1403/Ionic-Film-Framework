import { IAtores } from './../model/IAtores';
import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

 constructor(public router:Router,
              public alertController:AlertController,
              public toastController:ToastController) {}

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
    },
    {
      nome: 'Dwayne Johnson',
      nascimento: '02/05/1972',
      idade: '51',
      LocalDeNascimento: 'USA',
      foto: 'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/cgoy7t5Ve075naBPcewZrc08qGw.jpg',
      genero: ['Masculino'],
      pagina: '/dwaynejhonson',
      favorito: true
    }
  ];
  exibirAtores(atores:IAtores){
    const navigationExtras: NavigationExtras = {state:{paramAtores:atores}};
    this.router.navigate(['ator-detalhe'],navigationExtras);
  }

  async exibirAlertaFavorito(atores:IAtores){
    const alert = await this.alertController.create({

      header:'Meus Favoritos',
      message: 'Deseja realmente favoritar este Ator ?',
      buttons:[
        {
          text:'Cancelar',
          role:'cancel',
          handler: ()=>{
            atores.favorito=false;
          }
        }, {
          text:'Sim, Favoritar.',
          handler: ()=>{
            atores.favorito=true;
            this.apresentarToast(atores);
          }
        }
      ]
    });
    await alert.present();
  }

  async apresentarToast(atores:IAtores) {
    const toast = await this.toastController.create({
      message:'Ator adicionado aos favoritos...',
      duration: 2000,
      color: 'success',
      buttons:[
        {
          text: 'Desfazer',
          handler: ()=>{
            atores.favorito=false;
          }
        }
      ]
    });
    toast.present();
  }

}
