import {Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <app-data-biding></app-data-biding>
  <router-outlet></router-outlet>
  `
//  templateUrl: './app.component.html',
//  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  ngOnInit(): void {  }
}

/* 
ngOnInit: é executado uma vez quando o componente é inicializado;
ngOnChanges: executado também uma vez na criação do componente e toda vez que ele sofrer alguma mudança;
ngDoCheck: executado a cada mudança que o ngOnChange não detecta;
ngOnDestroy: executado na destruição do componente.
Além desses existem outros quatros hooks dentro do ngDoCheck:

ngAfterContentInit: sempre que um conteúdo vindo de uma fonte externa do componente é inserido;
ngAfterContentChecked: quando o conteúdo externo é verificado;
ngAfterViewInit: executado logo após os dados dos filhos e do próprio componente ser inicializado;
ngAfterViewChecked: sempre que é detectado uma alteração do conteúdo é chamado esse cara.
*/

