import { ContentsComponent } from './contents.component';
import { ContentsRoutingModule } from './contents-routing.module';
import { MatTableModule, MatSelect, MatFormField, MatFormFieldControl, MatSelectModule, MatRipple, MatRippleModule, MatButtonModule } from '@angular/material';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [CommonModule, 
        ContentsRoutingModule,
        MatTableModule,
        MatSelectModule,
        MatRippleModule,
        MatButtonModule
    ],
    declarations: [ContentsComponent]
})
export class ContentsModule {}
