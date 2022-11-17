import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {LayoutModule} from './layout/layout.module';
import {CadastrarComponent} from './produto/cadastrar/cadastrar.component';
import {HttpClientModule} from '@angular/common/http';
import {ListagemComponent} from './produto/listagem/listagem.component';
import {FirestoreModule} from "./firestore/firestore.module";


@NgModule({
    declarations: [AppComponent, CadastrarComponent, ListagemComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        BrowserAnimationsModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatIconModule,
        MatCardModule,
        LayoutModule,
        HttpClientModule,
        FirestoreModule,
    ],
    exports: [CadastrarComponent, ListagemComponent],
    bootstrap: [AppComponent],
})
export class AppModule {
}
