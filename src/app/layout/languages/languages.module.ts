import { MatTableModule, MatSelect, MatFormField, MatFormFieldControl, MatSelectModule, MatRipple, MatRippleModule, MatButtonModule } from '@angular/material';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LanguagesRoutingModule } from './languages-routing.module';
import { LanguagesComponent } from './languages.component';

@NgModule({
    imports: [CommonModule, 
        LanguagesRoutingModule,
        MatTableModule,
        MatSelectModule,
        MatRippleModule,
        MatButtonModule
    ],
    declarations: [LanguagesComponent]
})
export class LanguagesModule {}
