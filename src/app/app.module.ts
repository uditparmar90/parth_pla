import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MasterComponent } from './master/master.component';
import { ImgSliderComponent } from './img-slider/img-slider.component';
import { AboutComponent } from './about/about.component';
import { ProductComponent } from './product/product.component';
import { ChooseComponent } from './choose/choose.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    MasterComponent,
    ImgSliderComponent,
    AboutComponent,
    ProductComponent,
    ChooseComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
