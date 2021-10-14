import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';
import { NgxCurrencyModule } from 'ngx-currency';
import { HttpClientModule } from '@angular/common/http';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RodapeComponent } from './rodape/rodape.component';
import { ContatoComponent } from './contato/contato.component';
import { LoginComponent } from './login/login.component';
import { AdimHomeComponent } from './adim-home/adim-home.component';
import { AdimNavbarComponent } from './adim-navbar/adim-navbar.component';
import { BookDeleteComponent } from './delete/book-delete/book-delete.component';
import { BookEditComponent } from './edit/book-edit/book-edit.component';
import { CategoryComponent } from './category/category.component';
import { CategoryEditComponent } from './edit/category-edit/category-edit.component';
import { CategoryDeleteComponent } from './delete/category-delete/category-delete.component';
import { VitrineComponent } from './vitrine/vitrine.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { SearchCategoryComponent } from './search-category/search-category.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { SearchCategoryComponent } from './search-category/search-category.component';

@NgModule({
  declarations: [
    AppComponent,
    CadastrarComponent,
    HomeComponent,
    NavbarComponent,
    RodapeComponent,
    ContatoComponent,
    LoginComponent,
    AdimHomeComponent,
    AdimNavbarComponent,
    BookDeleteComponent,
    BookEditComponent,
    CategoryComponent,
    CategoryEditComponent,
    CategoryDeleteComponent,
    VitrineComponent,
    SearchCategoryComponent,
    MyProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxMaskModule.forRoot({
      dropSpecialCharacters: false
    }),
    NgxCurrencyModule,
    ReactiveFormsModule
  ],
  providers: [
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
