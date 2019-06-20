import { MatTableModule, MatSelect, MatFormField, MatFormFieldControl, 
    MatSelectModule, MatRipple, MatRippleModule, MatButtonModule } from '@angular/material';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddLanguageRoutingModule } from './add-language-routing.module';
import { AddLanguageComponent } from './add-language.component';

@NgModule({
    imports: [CommonModule, 
        AddLanguageRoutingModule,
        MatTableModule,
        MatSelectModule,
        MatRippleModule,
        MatButtonModule
    ],
    declarations: [AddLanguageComponent]
})
export class AddLanguageModule {}
