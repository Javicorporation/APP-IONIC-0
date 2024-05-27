import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InformationPageRoutingModule } from './information-routing.module';

import { ComponentsModule } from "../../components/components.module";
import { InformationPage } from './information.page';

@NgModule({
    declarations: [InformationPage],
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        InformationPageRoutingModule,
        ComponentsModule
    ]
})
export class InformationPageModule {}
