import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ConvertToSpacesPipe } from './servicos/substituirPontoPorVirgula';

@NgModule({
  declarations: [
    AppComponent,
    ConvertToSpacesPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
