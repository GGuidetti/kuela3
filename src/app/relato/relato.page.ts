import { Component, OnInit } from '@angular/core';
import { BankComponent } from '../bank/bank.page';
import { AngularFireDatabase } from '@angular/fire/database';


@Component({
  selector: 'app-relato',
  templateUrl: './relato.page.html',
  styleUrls: ['./relato.page.scss'],
})
export class RelatoComponent implements OnInit {

relato: BankComponent = new BankComponent();
  constructor(private banco: AngularFireDatabase) { }

  ngOnInit() {
  }
enviar(){
  this.banco.list('relato').push(this.relato);
  this.relato = new BankComponent();

}
}
