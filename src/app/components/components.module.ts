import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import {SignatureClientComponent} from './signatures/signature-client.component';
import {SignatureResponsableComponent} from './signatures/signature-responsable.component';
import {SignaturePadModule} from 'angular2-signaturepad';

const components = [
    SignatureClientComponent,
    SignatureResponsableComponent
];

@NgModule( {
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        IonicModule,
        RouterModule,
        ReactiveFormsModule,
        SignaturePadModule,
    ],
    declarations: [
        components
    ],
    exports: [
        components
    ],
           } )
export class ComponentsModule {
}
