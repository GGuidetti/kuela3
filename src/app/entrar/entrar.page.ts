import {Component} from '@angular/core';
@Component({

    selector: 'entrar-page',
    templateUrl: 'entrar.page.html'
})


export class EntrarComponent{
    altura: number =0;
    base: number =0;
    resultado: string;

    calcular() : void{
      var area = Number(this.base)*Number(this.altura)/2;
      this.resultado='a area é:'+area;


    }
}
