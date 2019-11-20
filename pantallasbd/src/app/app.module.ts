import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Pantalla1Component } from './pantalla1/pantalla1.component';
import { CKEditorModule } from 'ckeditor4-angular';
import { Pantalla2Component } from './pantalla2/pantalla2.component';
import { Pantalla3Component } from './pantalla3/pantalla3.component';

@NgModule({
   declarations: [
      AppComponent,
      Pantalla1Component,
      Pantalla2Component,
      Pantalla3Component
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      CKEditorModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
