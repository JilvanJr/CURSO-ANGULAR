import { Component } from '@angular/core';

@Component({
  selector: 'app-data-biding',
  templateUrl: './data-biding.component.html',
  styleUrls: ['./data-biding.component.scss']
})
export class DataBidingComponent {

  public nome: string = "Jilvan";
  public idade: number = 27;
  public maisUm: number = 1;
  
  public checkedDisabled: boolean = false;
  public imgSrc: string = "https://img2.gratispng.com/20180808/lo/kisspng-website-development-front-end-web-development-web-best-html5-development-company-in-india-hire-html-5b6ac8bd756038.0640730415337248614808.jpg";
  public imgTitle: string = "Property Biding";

public position: {x: number, y: number } = {x: 0, y: 0} // mesma coisa que public position: any;


  public alertaInfo(valor: MouseEvent) {
    //alert(valor) >>> <button (click)="alertaInfo('Deu bom JJ')">Evento</button>
    console.log(valor) // >>>  <button (click)="alertaInfo($event)">Evento</button>
  }

  public mouseMoveTeste(valor: MouseEvent) {
    this.position.x = valor.offsetX;
    this.position.y = valor.offsetY;
  }
}
