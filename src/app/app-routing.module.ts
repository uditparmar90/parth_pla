import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ProductComponent } from './product/product.component';
import { MasterComponent } from './master/master.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ProductCrudComponent } from './product-crud/product-crud.component';
import {ProductDetailsComponent} from './product-details/product-details.component'
import { PpTapeFibrillatedExtrusionPlantComponent } from './pp-tape-fibrillated-extrusion-plant/pp-tape-fibrillated-extrusion-plant.component';
import { MonoDanlineExtrusionPlantComponent } from './mono-danline-extrusion-plant/mono-danline-extrusion-plant.component';
import { PpHdpeMonofilamentExtrusionYarnPlantComponent } from './pp-hdpe-monofilament-extrusion-yarn-plant/pp-hdpe-monofilament-extrusion-yarn-plant.component';
import { DanlineExtrusionPlantComponent } from './danline-extrusion-plant/danline-extrusion-plant.component';
import { BalerTwineExtrusionPlantComponent } from './baler-twine-extrusion-plant/baler-twine-extrusion-plant.component';
import { RopeMakingMachineTwoSixMmComponent } from './rope-making-machine-two-six-mm/rope-making-machine-two-six-mm.component';
import { SutilExtrusionPlantComponent } from './sutil-extrusion-plant/sutil-extrusion-plant.component';
import { RopeMakingMachineFourEightMmComponent } from './rope-making-machine-four-eight-mm/rope-making-machine-four-eight-mm.component';
import { RopeMakingMachineSixTwelveMmComponent } from './rope-making-machine-six-twelve-mm/rope-making-machine-six-twelve-mm.component';
import { RopeMakingMachineEightSixteenMmComponent } from './rope-making-machine-eight-sixteen-mm/rope-making-machine-eight-sixteen-mm.component';
import { RopeMakingMachineTwelveTwentyFourMmComponent } from './rope-making-machine-twelve-twenty-four-mm/rope-making-machine-twelve-twenty-four-mm.component';
import { RopeMakingMachineEighteenFourytMmComponent } from './rope-making-machine-eighteen-fouryt-mm/rope-making-machine-eighteen-fouryt-mm.component';
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'products', component: ProductComponent },
  { path: 'contact', component: ContactComponent }, 
  { path: 'add_products', component: ProductDetailsComponent },
  { path : "app-pp-tape-fibrillated-extrusion-plant", component:PpTapeFibrillatedExtrusionPlantComponent},
  { path : "app-mono-danline-extrusion-plant", component:MonoDanlineExtrusionPlantComponent},
  { path : "app-pp-hdpe-monofilament-extrusion-yarn-plant", component:PpHdpeMonofilamentExtrusionYarnPlantComponent},
  { path : "app-danline-extrusion-plant", component:DanlineExtrusionPlantComponent},
  { path : "app-baler-twine-extrusion-plant", component:BalerTwineExtrusionPlantComponent},
  { path : "app-sutil-extrusion-plant", component:SutilExtrusionPlantComponent},
  { path : "app-rope-making-machine-two-six-mm", component:RopeMakingMachineTwoSixMmComponent},
  { path : "app-rope-making-machine-four-eight-mm", component:RopeMakingMachineFourEightMmComponent}, 
  { path : "app-rope-making-machine-eight-sixteen-mm", component:RopeMakingMachineEightSixteenMmComponent}, 
  { path : "app-rope-making-machine-six-twelve-mm", component:RopeMakingMachineSixTwelveMmComponent}, 
  { path : "app-rope-making-machine-twelve-twenty-four-mm", component:RopeMakingMachineTwelveTwentyFourMmComponent}, 
  { path : "app-rope-making-machine-eighteen-fouryt-mm", component:RopeMakingMachineEighteenFourytMmComponent}, 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
