import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlertPageRoutingModule } from './alert-routing.module';

import { ComponentsModule } from "../../components/components.module";
import { AlertPage } from './alert.page';

@NgModule({
    declarations: [AlertPage],
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        AlertPageRoutingModule,
        CommonModule,
        ComponentsModule
    ]
})
export class AlertPageModule {}
