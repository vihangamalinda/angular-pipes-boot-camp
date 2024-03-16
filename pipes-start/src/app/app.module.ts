import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { ShortenPipe } from './shorten.pipe';
import { ShortenByRangePipe } from './shortenByRange.pip';
import { FilterPipe } from './filter.pipe';
import { ReversePipe } from './reverse/reverse.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ShortenPipe,
    ShortenByRangePipe,
    FilterPipe,
    ReversePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
