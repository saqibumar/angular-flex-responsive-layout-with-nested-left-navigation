import { AddLanguageComponent } from './languages/add-language/add-language.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule
} from '@angular/material';
import { TranslateModule } from '@ngx-translate/core';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { TopnavComponent } from './components/topnav/topnav.component';
import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { NavComponent } from './nav/nav.component';
import { MenuListItemComponent } from './components/sidebar/menu-list-item/menu-list-item.component';
import { LanguagesComponent } from './languages/languages.component';
import { GlossaryComponent } from './page1/glossary/glossary.component';
import { ContentsComponent } from './page1/contents/contents.component';


@NgModule({
    imports: [
        CommonModule,
        LayoutRoutingModule,
        MatToolbarModule,
        MatButtonModule,
        MatSidenavModule,
        MatIconModule,
        MatInputModule,
        MatMenuModule,
        MatListModule,
        TranslateModule
    ],
    declarations: [
        LayoutComponent, 
        NavComponent, 
        TopnavComponent, 
        SidebarComponent, 
        MenuListItemComponent
    ]
})
export class LayoutModule {}
