import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PhotosPageRoutingModule } from './photos-routing.module';

import { ComponentsModule } from "../../components/components.module";
import { PhotosPage } from './photos.page';

@NgModule({
    declarations: [PhotosPage],
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        PhotosPageRoutingModule,
        ComponentsModule
    ]
})
export class PhotosPageModule {}
