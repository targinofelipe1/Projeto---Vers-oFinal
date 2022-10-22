import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CadastrarComponent } from './produto/cadastrar/cadastrar.component';
import { ListagemComponent } from './produto/listagem/listagem.component';

const routes: Routes = [
  {
    path: 'cadastrarproduto',
    component: CadastrarComponent,
  },
  {
    path: 'listarproduto',
    component: ListagemComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
