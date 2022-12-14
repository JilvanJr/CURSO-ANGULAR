import { Component, Input, OnChanges, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnChanges, OnDestroy {

  ngOnDestroy(): void {
    console.log("Deu bom foi destruido")
  }

  @Input() public title:string = "Bem vindo!"

  ngOnChanges(): void {
    console.log("Foi alterado com sucesso");  
  }
}
