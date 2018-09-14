import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './home/welcome.component';
import { ProductModule } from './products/product.module';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'welcome', component: WelcomeComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },   // default route
      { path: '**', redirectTo: 'welcome', pathMatch: 'full' }, // 404 not found page
    ]),
    ProductModule
  ],

  declarations: [
    AppComponent,
    WelcomeComponent
  ],

  bootstrap: [AppComponent]
})

export class AppModule { }
