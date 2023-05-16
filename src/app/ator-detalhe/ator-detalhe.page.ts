import { Component, OnInit } from '@angular/core';
import { IAtores } from '../model/IAtores';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ator-detalhe',
  templateUrl: './ator-detalhe.page.html',
  styleUrls: ['./ator-detalhe.page.scss'],
})
export class AtorDetalhePage implements OnInit {
    atores:any;

    constructor(private route:ActivatedRoute,private router:Router) { }

    ngOnInit() {
      this.route.queryParams.subscribe(params =>{
        const getNav = this.router.getCurrentNavigation();
        if (getNav?.extras.state) {
          this.atores = getNav.extras.state['paramAtores'];
        }
      });
    }
  }

