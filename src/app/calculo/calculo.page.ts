import {Component} from '@angular/core';
@Component({

    selector: 'calculo-page',
    templateUrl: 'calculo.page.html'
})


export class CalculoComponent{
    altura: number =0;
    base: number =0;
    resultado: string;

    calcular() : void{
      var area = Number(this.base)*Number(this.altura)/2;
      this.resultado='a area é:'+area;


    }
}
