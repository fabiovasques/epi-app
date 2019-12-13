import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChamarApiPageRoutingModule } from './chamar-api-routing.module';

import { ChamarApiPage } from './chamar-api.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChamarApiPageRoutingModule
  ],
  declarations: [ChamarApiPage]
})
export class ChamarApiPageModule {}
