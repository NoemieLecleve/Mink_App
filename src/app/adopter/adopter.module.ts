import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AdopterPage } from './adopter.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { AdopterPageRoutingModule } from './adopter-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    AdopterPageRoutingModule
  ],
  declarations: [AdopterPage]
})
export class AdopterPageModule {}
