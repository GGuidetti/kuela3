import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastroComponent } from './cadastro/cadastro.page';
import { EntrarComponent } from './entrar/entrar.page';
import { CalculoComponent } from './calculo/calculo.page';
import { ResultadoComponent } from './resultado/resultado.page';
import { RelatoComponent } from './relato/relato.page';
import { BankComponent } from './bank/bank.page';
import {ContatoListaPage } from './listar/listar.page';
const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
    { path: 'cadastro', component: CadastroComponent },
  { path: 'entrar', component: EntrarComponent },
  { path: 'calculo', component: CalculoComponent },
  { path: 'resultado', component: ResultadoComponent },
  { path: 'relato', component: RelatoComponent },

  { path: 'bank', component: BankComponent },
  { path: 'listar', component:  ContatoListaPage },

  { path: 'banco', loadChildren: './banco/banco.module#BancoPageModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
