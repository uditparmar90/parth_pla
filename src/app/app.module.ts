import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MasterComponent } from './master/master.component';
import { ImgSliderComponent } from './img-slider/img-slider.component';
import { AboutComponent } from './about/about.component';
import { ProductComponent } from './product/product.component';
import { ChooseComponent } from './choose/choose.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductCrudComponent } from './product-crud/product-crud.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { PpTapeFibrillatedExtrusionPlantComponent } from './pp-tape-fibrillated-extrusion-plant/pp-tape-fibrillated-extrusion-plant.component';
import { MonoDanlineExtrusionPlantComponent } from './mono-danline-extrusion-plant/mono-danline-extrusion-plant.component';
import { PpHdpeMonofilamentExtrusionYarnPlantComponent } from './pp-hdpe-monofilament-extrusion-yarn-plant/pp-hdpe-monofilament-extrusion-yarn-plant.component';
import { DanlineExtrusionPlantComponent } from './danline-extrusion-plant/danline-extrusion-plant.component';
import { BalerTwineExtrusionPlantComponent } from './baler-twine-extrusion-plant/baler-twine-extrusion-plant.component';
import { SutilExtrusionPlantComponent } from './sutil-extrusion-plant/sutil-extrusion-plant.component'; // Import FormsModule
@NgModule({
  declarations: [
    AppComponent,
    MasterComponent,
    ImgSliderComponent,
    AboutComponent,
    ProductComponent,
    ChooseComponent,
    FooterComponent,
    HomeComponent,
    ContactComponent,
    ProductCrudComponent,
    ProductDetailsComponent,
    PpTapeFibrillatedExtrusionPlantComponent,
    MonoDanlineExtrusionPlantComponent,
    PpHdpeMonofilamentExtrusionYarnPlantComponent,
    DanlineExtrusionPlantComponent,
    BalerTwineExtrusionPlantComponent,
    SutilExtrusionPlantComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatButtonModule, 
    HttpClientModule, 
    BrowserModule, 
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
