import { GlossaryComponent } from './glossary.component';
import { GlossaryRoutingModule } from './glossary-routing.module';
import { MatTableModule, MatSelect, MatFormField, MatFormFieldControl, MatSelectModule, MatRipple, MatRippleModule, MatButtonModule, MatTabNav, MatTabsModule, MatIconModule } from '@angular/material';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [CommonModule, 
        GlossaryRoutingModule,
        MatTableModule,
        MatSelectModule,
        MatRippleModule,
        MatButtonModule,
        MatTabsModule,
        MatIconModule
    ],
    declarations: [GlossaryComponent]
})
export class GlossaryModule {}
